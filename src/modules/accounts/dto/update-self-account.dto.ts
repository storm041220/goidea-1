import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString, ValidateIf } from "class-validator";
import { RoleName, RoleNames } from "@common/enums/role.enum";

export class UpdateAccountDto {
    @IsOptional()
    @IsBoolean()
    isActivated?: boolean;

    @IsOptional()
    @IsString()
    displayName?: string;

    @IsOptional()
    @IsEnum(RoleNames)
    role?: RoleName;
}

export class UpdateSelfAccountDto {

    @IsString()
    displayName: string;
}