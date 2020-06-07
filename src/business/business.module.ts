import { Module, HttpModule } from '@nestjs/common';
import { ReunionService } from './services/reunion.service';
import { PmuApiService } from './services/pmuapi/pmuapi.service';
import { DatabaseModule } from 'src/database/database.module';
@Module({
  imports: [HttpModule, DatabaseModule],
  providers: [ReunionService, PmuApiService],
  exports: [ReunionService, PmuApiService]
})
export class BusinessModule {}
