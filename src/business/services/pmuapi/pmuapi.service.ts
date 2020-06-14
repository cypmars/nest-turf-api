import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PmuApiBean, Reunion, Course, Programme, Participant } from 'src/business/models/programme';
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

    getAxiosReunionPMU(date: Date, numReunion: number, reunion): Observable<AxiosResponse<Reunion>> {
            const endpoint = this.pmuApiEndpointBase + 'programme/' + moment(date).format('DDMMYYYY') + '/R' + numReunion;
            console.log(endpoint);
            return this.httpService.get(endpoint);
    }

    getReunionPMU(date: Date, reunion: Reunion): Observable<Reunion> {
        return new Observable((observer) => {
            const endpoint = this.pmuApiEndpointBase + 'programme/' + moment(date).format('DDMMYYYY') + '/R' + reunion.numOfficiel;
            console.log(endpoint);
            this.httpService.get(endpoint).subscribe(
                (axiosReunion: AxiosResponse<Reunion>) => {
                    reunion = new Reunion(axiosReunion.data);
                    observer.next(reunion);
                    observer.complete();
                }, (err) => observer.error(err)
            );
        })
    }

    getAxiosCoursePMU(date: Date, numReunion: number, numCourse: number): Observable<AxiosResponse<Course>> {
        const endpoint = this.pmuApiEndpointBase + 'programme/' + moment(date).format('DDMMYYYY') + '/R' + numReunion + '/C' + numCourse;
        console.log(endpoint);
        return this.httpService.get(endpoint);
    }

    getCoursePMU(date: Date, course: Course): Observable<Course> {
        return new Observable((observer) => {
            const endpoint = this.pmuApiEndpointBase + 'programme/' + moment(date).format('DDMMYYYY') + '/R' + course.numReunion + '/C' + course.numOrdre;
            console.log(endpoint);
            this.httpService.get(endpoint).subscribe(
                (axiosCourse: AxiosResponse<Course>) => {
                    course = new Course(axiosCourse.data);
                    observer.next(course);
                    observer.complete();
                }, (err) => observer.error(err)
            );
        })
    }

    getAxiosParticipantsFromCoursePMU(date: Date, numReunion: number, numCourse: number): Observable<AxiosResponse<Array<Participant>>> {
        const endpoint = this.pmuApiEndpointBase + 'programme/' + moment(date).format('DDMMYYYY') + '/R' + numReunion + '/C' + numCourse + '/participants';
        console.log(endpoint);
        return this.httpService.get(endpoint);
    }

    getParticipantsFromCoursePMU(date: Date, course: Course): Observable<Array<Participant>> {
        return new Observable((observer) => {
            const endpoint = this.pmuApiEndpointBase + 'programme/' + moment(date).format('DDMMYYYY') + '/R' + course.numReunion + '/C' + course.numOrdre + '/participants';
            console.log(endpoint);
            this.httpService.get(endpoint).subscribe(
                (axiosCourse: AxiosResponse<Course>) => {
                    const arr = [];
                    for (let participant of axiosCourse.data.participants) {
                        arr.push(new Participant(participant))
                    }
                    course.participants = arr;
                    observer.next(arr);
                    observer.complete();
                }, (err) => observer.error(err)
            );
        })
    }

    getAllInfos(date: Date): Observable<Programme> {
        let programme;
        return new Observable((observer) => {
            this.getProgrammePMU(date).pipe(switchMap((axiosResponsePMU: AxiosResponse<PmuApiBean>) => {
                const reuObsArr = [];
                programme = new Programme(axiosResponsePMU.data.programme);
                for (let reunion of programme.reunions) {
                    reuObsArr.push(this.getReunionPMU(date, reunion))
                }
                return forkJoin(reuObsArr);
            })).pipe((switchMap((reunions: Array<Reunion>) => {
                const courseObsArr = []
                for (let reunion of reunions) {
                    for (let course of reunion.courses) {
                        courseObsArr.push(this.getCoursePMU(date, course))
                    }
                }
                return forkJoin(courseObsArr);
            }))).pipe((switchMap((courses: Array<Course>) => {
                const participantsObsArr = [];
                for (let course of courses) {
                    participantsObsArr.push(this.getParticipantsFromCoursePMU(date, course))
                }
                return (forkJoin(participantsObsArr))
            }))).subscribe(
                () => {
                    observer.next(programme);
                    observer.complete();
                },(err) => observer.error(err)
            )
        })
    }
}
