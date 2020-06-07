import { Controller, Get, Req, Param } from '@nestjs/common';
import { PmuApiService } from 'src/business/services/pmuapi/pmuapi.service';
import { Reunion } from 'src/database/models/reunion.entity';
import { ReunionService } from 'src/business/services/reunion.service';
import { Observable } from 'rxjs';
import { ProgrammeMapper } from 'src/business/mappers/programme-mapper';
import { ProgrammeDTO } from '../models/programme-dto';

@Controller('reunions')
export class ReunionController {
    constructor(private reunionService: ReunionService) {

    }

    @Get(':date')
    findByDate(@Param('date') dateStr: string): Observable<ProgrammeDTO> {
        const date = new Date(dateStr);
        return new Observable((observer) => {
            this.reunionService.findByDate(date).subscribe(
                (programme) => {
                    console.log('je suis dans la reponse mais je ne vais pas passer ahahaha: ', programme);
                    observer.next(ProgrammeMapper.entityToDTO(programme));
                    observer.complete();
                }, (err) => observer.error(err)
            )
        })
    }


}