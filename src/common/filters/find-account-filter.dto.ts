import { IsOptional } from "class-validator";
import { Transform } from "class-transformer";

export class FindAccountFilterDto {

    @IsOptional()
    @Transform(({ value }) => new RegExp(value, "i"))
    name?: string;

    @IsOptional()
    @Transform(({ value }) => new RegExp(value, "i"))
    slug?: string;
}