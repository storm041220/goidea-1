import { Module } from '@nestjs/common';
import { CreateUsersService } from '@src/modules/users/CreateUsers.service';
import { CreateUsersController } from './CreateUsers.controller';

@Module({
    imports: [],
    controllers: [CreateUsersController],
    providers: [CreateUsersService],
})
export class CreateUsersModule {}