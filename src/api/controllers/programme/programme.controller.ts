import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ProgrammeDTO } from 'src/api/models/programme-dto';
import { ProgrammeMapper } from 'src/business/mappers/programme-mapper';
import { ProgrammeService } from 'src/business/services/programme/programme.service';
import { ExcelService } from 'src/business/services/excel/excel.service';

@Controller('programme')
export class ProgrammeController {

    constructor(private programmeService: ProgrammeService, private excelService: ExcelService) { }

    @Get(':date')
    findByDate(@Param('date') dateStr: string): Observable<ProgrammeDTO> {
        const date = new Date(dateStr);
        return new Observable((observer) => {
            // this.excelService.readFile();
            this.programmeService.findByDate(date).subscribe(
                (programme) => {
                    observer.next(ProgrammeMapper.entityToDTO(programme));
                    observer.complete();
                }, (err) => observer.error(err)
            )
        })
    }
}
