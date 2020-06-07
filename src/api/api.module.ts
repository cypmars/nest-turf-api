import { Module } from '@nestjs/common';
import { ReunionController } from './controllers/reunion.controller';
import { BusinessModule } from 'src/business/business.module';

@Module({
  imports: [BusinessModule],
  controllers: [ReunionController]
})
export class ApiModule {}
