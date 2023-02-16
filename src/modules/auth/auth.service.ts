import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import * as jwt from "jsonwebtoken";
import { ConfigService } from "@nestjs/config";
import { compareSync } from "bcryptjs";
import { AccountsService } from "../accounts/accounts.service";
import { AccountDocument } from "../accounts/schema/account.schema";
import TokenEnum, { TokenType } from "@src/common/enums/token.enum";
import { HttpService } from "@nestjs/axios";
import { RegisterAccountDto } from "@src/common/util/register-account-dto";

@Injectable()
export class AuthService {
    supportedServicesOAuth: string[] = ["google", "facebook"];

    constructor(
        private configService: ConfigService,
        private accountService: AccountsService,
        private httpService: HttpService,
    ) {
    }

    async register(registerAccountDto: RegisterAccountDto) {
        if (await this.accountService.count({ $or: [{ username: registerAccountDto.username }, { email: registerAccountDto.email }] }) > 0) throw new HttpException("This account is already exists", 500);
        const account = await this.accountService.create(registerAccountDto);
        // await this.generateVerifyTokenAndSendEmail(Token.EmailVerify, account);
        return account;
    }

    async authenticate(loginField: string, password: string) {
        let account = await this.accountService.findOne({ $or: [{ email: loginField }, { username: loginField }] }, {
            select: "username password email isActivated"
        });

        // if (!account.isActivated) {
        //   await this.generateVerifyTokenAndSendEmail(Token.EmailVerify, account);
        //   throw new HttpException("verifyAccount", HttpStatus.INTERNAL_SERVER_ERROR);
        // }

        const check = await this.comparePassword(password, account.password);
        if (!account || !check) {
            throw new HttpException("Failed to login", HttpStatus.UNAUTHORIZED);
        }

        account = await this.accountService.findOne({ _id: account._id });
        return account;
    }

    generateToken(payload: any, keyName: "jwt.accessTokenPrivateKey" | "jwt.refreshTokenPrivateKey", options?: jwt.SignOptions) {
        const privateKeyBase64 = this.configService.get(keyName);
        const privateKey = Buffer.from(privateKeyBase64, "base64").toString("ascii");
        return jwt.sign(payload, privateKey, {
            algorithm: "HS256",
            ...options
        });
    }

 

    async comparePassword(password: string, storePasswordHash: string): Promise<boolean> {
        return compareSync(password, storePasswordHash);
    }
}
