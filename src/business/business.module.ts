import { Module, HttpModule } from '@nestjs/common';
import { ReunionService } from './services/reunion/reunion.service';
import { PmuApiService } from './services/pmuapi/pmuapi.service';
import { DatabaseModule } from 'src/database/database.module';
import { ProgrammeService } from './services/programme/programme.service';
import { ExcelService } from './services/excel/excel.service';
@Module({
  imports: [HttpModule, DatabaseModule],
  providers: [ReunionService, PmuApiService, ProgrammeService, ExcelService],
  exports: [ReunionService, PmuApiService, ProgrammeService, ExcelService]
})
export class BusinessModule {}
