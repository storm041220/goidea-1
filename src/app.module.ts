import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './modules/admin/admin.module';
import { AuthModule } from './modules/auth/auth.module';
import { AccountsModule } from './modules/accounts/accounts.module';
import { DatabaseModule } from './common/database_module/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_URI } from '@src/configs/env';
import { ConfigModule } from '@nestjs/config';
import configs from "@src/configs";
import { TokensModule } from './modules/token/token.modulet';

console.log(`MONGO_URI: ${MONGO_URI}`);

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_URI),
    DatabaseModule,
    TokensModule,
    AdminModule,
    AuthModule,
    AccountsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configs]
    }),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
