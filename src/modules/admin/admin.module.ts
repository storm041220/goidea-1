import { Module } from '@nestjs/common';
import { AdminService } from '@src/modules/admin/admin.service';
import { AdminController } from './admin.controller';
import { RouterModule } from '@nestjs/core';

@Module ({
    imports: [RouterModule.register([
        {
            path: 'admin',
            module: AdminModule,
        },
    ])],
    controllers: [AdminController],
    providers: [AdminService],
})
export class AdminModule {}