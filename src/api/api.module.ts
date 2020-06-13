import { Module } from '@nestjs/common';
import { ReunionController } from './controllers/reunion/reunion.controller';
import { BusinessModule } from 'src/business/business.module';
import { ProgrammeController } from './controllers/programme/programme.controller';

@Module({
  imports: [BusinessModule],
  controllers: [ReunionController, ProgrammeController]
})
export class ApiModule {}
