import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { Match } from "@common/decorators/validate.decorator";
export class ChangePasswordDto {
    @IsString()
    @IsNotEmpty()
    currentPassword: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(32)
    newPassword: string;

    @IsNotEmpty()
    @IsString()
    @Match("newPassword", { message: "New password and confirm password does not match" })
    confirmPassword: string;
}
