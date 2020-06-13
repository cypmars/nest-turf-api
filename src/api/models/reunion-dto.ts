import { CourseDTO } from "./course-dto";


export class ReunionDTO {

    dateReunion: number;
    numOfficiel: number;

    audience: string;
    hippodrome: HippodromeDTO;
    meteo: MeteoDTO;
    nature: string;
    numExterne: number;
    offresInternet: boolean;
    pays: PaysDTO;
    reportPlusFpaMax: number;
    statut: string;
    courses: Array<CourseDTO>;

    constructor() { }
}

export class HippodromeDTO {
    code: string;
    libelleCourt: string;
    libelleLong: string;
}

export class MeteoDTO {
    datePrevision: number;
    temperature: number;
    forceVent: number;
    directionVent: string;

    nebulosite: NebulositeDTO;
}

export class PaysDTO {
    code: string;
    libelle: string;
}

export class NebulositeDTO {
    code: string;
    libelleCourt: string;
    libelleLong: string;
}