import { Controller, Get, Render, Res } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Response } from 'express';

@Controller()
export class AdminController {
  constructor(private readonly appService: AdminService) {}

  @Get()
  root(@Res() res: Response) {
    return res.render('roles/admin/dashboard', { layout: 'main' });
  }

  @Get('users')
  users(@Res() res: Response) {
    return res.render('roles/admin/user_index', { layout: 'auth' });
  }

  @Get('createUsers')
  createUsers(@Res() res: Response) {
    return res.render('roles/admin/CreateUsers_index', { layout: 'main' });
  }

  @Get('Organization')
  Organization(@Res() res: Response) {
    return res.render('organizations/dashboard', { layout: 'auth' });
  }
}