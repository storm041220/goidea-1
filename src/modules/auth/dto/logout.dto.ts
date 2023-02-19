import { IsOptional, IsString } from "class-validator";

export class LogoutDto {
    @IsOptional()
    @IsString()
    deviceToken: string;

    @IsString()
    refreshToken: string;

}
