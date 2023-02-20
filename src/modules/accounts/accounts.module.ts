import { Global, Module } from "@nestjs/common";
import { AccountsService } from './accounts.service';
import { DatabaseModule } from "@src/common/database_module/database.module";
import { RouterModule } from "@nestjs/core";
import { AccountsController } from "./accounts.controller";
import { AccountsAPIController } from './accounts.api.controller';


@Global()
@Module({
    controllers: [AccountsController, AccountsAPIController],
    providers: [AccountsService],
    exports: [AccountsService],
    imports: [DatabaseModule,
        RouterModule.register([
        {
            path: 'accounts',
            module: AccountsModule,
        },
    ])]
})
export class AccountsModule {
}