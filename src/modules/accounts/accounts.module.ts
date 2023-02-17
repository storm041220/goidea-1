import { Global, Module } from "@nestjs/common";
import { AccountsService } from './accounts.service';
import { DatabaseModule } from "@src/common/database_module/database.module";
import { RouterModule } from "@nestjs/core";
import { AccountsController } from "./accounts.controller";


@Global()
@Module({
    controllers: [AccountsController],
    providers: [AccountsService],
    exports: [AccountsService],
    imports: [DatabaseModule,
        RouterModule.register([
        {
            path: 'api/accounts',
            module: AccountsModule,
        },
    ])]
})
export class AccountsModule {
}