import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('customers')
export class CustomersController {
    constructor(){}

    @Get('/')
    getIndex(@Req() request: Request): string {
        return `minha primeira controller: ${request.method}`;
    }
}
