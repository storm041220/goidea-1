import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './modules/admin/admin.module';
import { IdeaModule } from './modules/ideas/idea.module';

console.log(`MONGO_URI: ${MONGO_URI}`);

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_URI),
    DatabaseModule,
    TokensModule,
    AdminModule,
    IdeaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
