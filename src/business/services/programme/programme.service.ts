import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Programme } from 'src/database/models/programme.entity';
import { ProgrammeDBService } from 'src/database/services/programme-db/programme-db.service';
import { PmuApiService } from '../pmuapi/pmuapi.service';
import { PmuApiBean } from 'src/business/models/programme';
import { ProgrammeMapper } from 'src/business/mappers/programme-mapper';
import { AxiosResponse } from 'axios';

@Injectable()
export class ProgrammeService {

    public dayD = new Date(new Date().toDateString());
    public now = new Date();
    // 5 minutes
    public tsToRefreshDayD = 5 * 60 * 1000;
    // 2 heures
    public tsToRefreshDayDPlus = 2 * 60 * 60 * 1000;

    constructor(        
        private pmuApiService: PmuApiService,
        private programmeDB: ProgrammeDBService) { }


    public findByDate(date: Date) : Observable<Programme>{
        return new Observable((observer) => {
            date = new Date(date.toDateString());
            this.programmeDB.findByDate(date)
                .then((programme: Programme) => {
                    console.log(JSON.stringify(programme));
                    this.saveWithPMU(date, programme).subscribe(
                        (programme: Programme) => {
                            observer.next(programme)
                            observer.complete()
                        },
                        (error) => observer.error(error)
                    );
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

    public saveWithPMU(date, programme?: Programme): Observable<Programme> {
        return new Observable((observer) => {
            this.pmuApiService.getProgrammePMU(date).subscribe(
                (axios: AxiosResponse<PmuApiBean>) => {
                    const programmeToSave = programme ? ProgrammeMapper.dbToEntity(axios.data, programme) : ProgrammeMapper.pmuApiBeanToEntity(axios.data);
                    console.log(JSON.stringify(programmeToSave));
                    this.programmeDB.createOrUpdateOne(programmeToSave).then(
                        (programme) => {
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
