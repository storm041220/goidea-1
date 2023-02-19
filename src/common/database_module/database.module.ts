import { MongooseModule } from "@nestjs/mongoose";
import { Global, Module } from "@nestjs/common";
import { AccountSchema } from "@src/modules/accounts/schema/account.schema";
import { DefaultAccount } from "../util/default-account";
import { TokenSchema } from "@src/modules/token/schema/token.schema";

@Global()
@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: "Account", schema: AccountSchema
            },
            {
                name: "Token", schema: TokenSchema
            }
        ]),
        MongooseModule.forFeatureAsync([
            {
                name: "Account",
                useFactory: () => {
                    const schema = AccountSchema;
                    const accountModel = new DefaultAccount(schema);
                    accountModel.generate().then(_ => { });
                    return schema;
                }
            }
        ])
    ],

    exports: [
        MongooseModule.forFeature([
            {
                name: "Account", schema: AccountSchema
            }, {
                name: "Token", schema: TokenSchema
            }
        ])
    ]
})
export class DatabaseModule {
}
