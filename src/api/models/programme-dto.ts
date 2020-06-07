import { ReunionDTO } from "./reunion-dto";

export class ProgrammeDTO {
    date: Date;
    dateInsertDB: Date;
    dateProgrammeActif: Date;
    datesProgrammesDisponibles: string[];
    reunions: ReunionDTO[]
    
    constructor() { }
}