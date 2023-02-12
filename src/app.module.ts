import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from '@common/filters/all-exceptions.filter';

@Module({
    imports: [],
    providers: [{
        provide: APP_FILTER,
        useClass: AllExceptionsFilter
    }]
})