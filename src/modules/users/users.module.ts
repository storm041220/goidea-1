import { Module } from '@nestjs/common';
import { UserService } from '@src/modules/users/user.service';
import { UserController } from './users.controller';

@Module ({
    imports: [],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}