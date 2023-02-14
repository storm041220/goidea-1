import { Module } from "@nestjs/common";
import { OrganizationCreateController } from "./organization.create.controller";

@Module({
    controllers: [OrganizationCreateController],
})
export class OrganizationCreateModule {}