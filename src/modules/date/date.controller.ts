import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class DateController {
    @Get()
    root(@Res() res: Response) {
        return res.render('date/dashboard', { layout: 'auth' });
    }
}