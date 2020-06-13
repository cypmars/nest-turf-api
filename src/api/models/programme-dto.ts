import { ReunionDTO } from "./reunion-dto";

export class ProgrammeDTO {
    date: Number;
    dateInsertDB: Number;
    dateProgrammeActif: Number;
    datesProgrammesDisponibles: string[];
    reunions: ReunionDTO[]
    
    constructor() { }
}