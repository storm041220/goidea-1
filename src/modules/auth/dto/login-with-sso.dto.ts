import { IsMongoId, IsNotEmpty, IsString } from "class-validator";

export class LoginWithSsoDto {
    @IsString()
    @IsNotEmpty()
    grantType: string;

    @IsString()
    @IsNotEmpty()
    redirectUri;

    @IsString()
    @IsNotEmpty()
    authorizationCode: string;

    @IsString()
    @IsNotEmpty()
    service: string;
}
