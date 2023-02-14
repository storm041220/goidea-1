import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class OrganizationCreateController {
    constructor() {}
    
    @Get()
    root(@Res() res: Response) {
        return res.render('organization_create', { layout: 'auth' });
    }
    }