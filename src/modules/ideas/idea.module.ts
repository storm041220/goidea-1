import { Module } from "@nestjs/common";
import { IdeaController } from './idea.controller';


@Module({
    imports: [],
    controllers: [IdeaController],
    providers: [],
})
export class IdeaModule { }