import { Module } from '@nestjs/common';
import { DateCreateController } from './date.create.controller';

@Module({
    imports: [],
    controllers: [DateCreateController],
})
export class DateCreateModule {}