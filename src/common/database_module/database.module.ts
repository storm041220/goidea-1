import { MongooseModule } from "@nestjs/mongoose";
import { Global, Module } from "@nestjs/common";
import { AccountSchema } from "@src/modules/accounts/schema/account.schema";
import { DefaultAccount } from "../util/default-account";

@Global()
@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: "Account", schema: AccountSchema
            },
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
            },
        ])
    ]
})
export class DatabaseModule {
}
