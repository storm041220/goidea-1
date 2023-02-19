import { Global, Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";
import { DatabaseModule } from "@src/common/database_module/database.module";
import { AuthController } from "./auth.api.controller";
import { AuthService } from "./auth.service";
import { HttpModule } from "@nestjs/axios";
import { TokensService } from '../token/token.service';

@Global()
@Module({
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService],
    imports: [
        HttpModule,
        RouterModule.register([
            {
                path: 'auth',
                module: AuthModule,
            },
        ])]
})
export class AuthModule {
}