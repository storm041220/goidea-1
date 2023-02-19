import { Global, Module } from "@nestjs/common";
import { DatabaseModule } from "@src/common/database_module/database.module";
import { TokensService } from "./token.service";

@Global()
@Module({
    providers: [TokensService],
    exports: [TokensService],
    imports: [DatabaseModule]
})
export class TokensModule {
}