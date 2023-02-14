import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class DateCreateController {
    @Get()
    root(@Res() res: Response) {
        return res.render('date/dateCreate', { layout: 'auth' });
    }
}
