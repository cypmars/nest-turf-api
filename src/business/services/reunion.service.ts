import { Injectable} from '@nestjs/common';
import { PmuApiService } from './pmuapi/pmuapi.service';
import { AxiosResponse } from 'axios';
import { ProgrammeDBService } from 'src/database/services/programme-db/programme-db.service';
import { ReunionDBService } from 'src/database/services/reunion-db/reunion-db.service';
import { Programme } from 'src/database/models/programme.entity';
import { Observable } from 'rxjs';
import { PmuApiBean } from '../models/programme';
import { ProgrammeMapper } from '../mappers/programme-mapper';

@Injectable()
export class ReunionService {

    public dayD = new Date(new Date().toDateString());
    public now = new Date();
    // 5 minutes
    public tsToRefreshDayD = 5 * 60 * 1000;
    // 2 heures
    public tsToRefreshDayDPlus = 2 * 60 * 60 * 1000;

    constructor(
        private pmuApiService: PmuApiService, 
        private reunionDB: ReunionDBService,
        private programmeDB: ProgrammeDBService) { }

    public findByDate(date: Date) : Observable<Programme>{
        return new Observable((observer) => {
            date = new Date(date.toDateString());
            this.programmeDB.findByDate(date)
                .then((programme: Programme) => {
                    // Element in DB found
                    if (this.neededPMUApiCall(date, programme.dateInsertDB)) {
                        // To refresh !
                        this.saveWithPMU(date).subscribe(
                            (programme: Programme) => {
                                observer.next(programme)
                                observer.complete()
                            },
                            (error) => observer.error(error)
                        );
                    } else {
                        // No refresh needed
                        observer.next(programme);
                        observer.complete();
                    }
                })
                .catch((e) => {
                    // No element in DB
                    this.saveWithPMU(date).subscribe(
                        (programme: Programme) => {
                            observer.next(programme)
                            observer.complete()
                        },
                        (error) => observer.error(error)
                    );
                });
        })
    }

    public saveWithPMU(date) {
        return new Observable((observer) => {
            this.pmuApiService.getProgrammePMU(date).subscribe(
                (axios: AxiosResponse<PmuApiBean>) => {
                    const programmeToSave = ProgrammeMapper.pmuApiBeanToEntity(axios.data);
                    this.programmeDB.createOrUpdateOne(programmeToSave).then(
                        (programme) => {
                            console.log('programmeSaved: ', programme)
                            observer.next(programme);
                            observer.complete();
                        },
                        (err) => {
                            console.log(err);
                            observer.next(programmeToSave);
                            observer.complete()
                        }
                    );
                }, (err) => observer.error(err)
            );
        })
    }

    neededPMUApiCall(date: Date, lastCallDate: Date): boolean {
        if (date.getTime() === this.dayD.getTime()) {
            if (new Date(lastCallDate.getTime() + this.tsToRefreshDayD) < this.now) {
                return true
            }
        }

        if (date.getTime() > this.dayD.getTime()) {
            if (new Date(lastCallDate.getTime() + this.tsToRefreshDayDPlus) < this.now) {
                return true
            }
        }

        return false;
    }
}
