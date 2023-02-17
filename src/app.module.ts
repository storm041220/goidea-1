import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './modules/admin/admin.module';
import { AccountsModule } from './modules/accounts/accounts.module';
import { IdeaModule } from './modules/ideas/idea.module';


@Module({
  imports: [
    AdminModule,
    IdeaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
