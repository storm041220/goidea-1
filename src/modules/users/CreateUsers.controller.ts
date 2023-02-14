import { Controller, Get, Render, Res } from '@nestjs/common';
import { CreateUsersService } from './CreateUsers.service';
import { Response } from 'express';

@Controller()
export class CreateUsersController {
    constructor(private readonly appService: CreateUsersService) {}
    
    @Get()
    root(@Res() res: Response) { 
        return res.render('CreateUsers_index', { layout: 'main' });
    }
}