import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class ForgetPasswordDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;
}
