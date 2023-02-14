import { Controller, Get, Render, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller()
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  root(@Res() res: Response) {
    return res.render('user_index', { layout: 'auth' });
  }
}