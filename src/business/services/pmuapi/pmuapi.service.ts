import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { PmuApiBean } from 'src/business/models/programme';
import * as moment from 'moment';
@Injectable()
export class PmuApiService {
    pmuApiEndpointBase = 'https://online.turfinfo.api.pmu.fr/rest/client/1/';
    constructor(private httpService: HttpService) { }

    getProgrammePMU(date: Date): Observable<AxiosResponse<PmuApiBean>> {
        const endpoint = this.pmuApiEndpointBase + 'programme/' + moment(date).format('DDMMYYYY');
        console.log(endpoint);
        return this.httpService.get(endpoint);
    }
}
