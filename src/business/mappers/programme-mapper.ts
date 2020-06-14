import { PmuApiBean } from "../models/programme";
import { Programme } from "src/database/models/programme.entity";
import { Programme as ProgrammePMU } from "src/business/models/programme";
import { ProgrammeDTO } from "src/api/models/programme-dto";
import { ReunionMapper } from "./reunion-mapper";

export class ProgrammeMapper {
    public static pmuApiBeanToEntity(programmePMU: ProgrammePMU): Programme {
        const programme = new Programme();
        programme.date = programmePMU.date ? new Date(programmePMU.date) : null;
        programme.dateProgrammeActif = programmePMU.dateProgrammeActif ? new Date(programmePMU.dateProgrammeActif) : null;
        programme.datesProgrammesDisponibles = [];
        programme.datesProgrammesDisponibles.push(...programmePMU.datesProgrammesDisponibles);
        programme.date_insert_db = new Date();
        programme.reunions = [];
        for (let reunionPMU of programmePMU.reunions) {
            programme.reunions.push(ReunionMapper.pmuToEntity(reunionPMU));
        }
        return programme
    }

    public static entityToDTO(data: Programme): ProgrammeDTO {
        const programme = new ProgrammeDTO();
        programme.date = data.date ? new Date(data.date).getTime(): null;
        programme.dateProgrammeActif = data.dateProgrammeActif ? new Date(data.dateProgrammeActif).getTime() : null;
        programme.datesProgrammesDisponibles = [];
        programme.datesProgrammesDisponibles.push(...data.datesProgrammesDisponibles);
        programme.reunions = [];
        for (let reunion of data.reunions) {
            programme.reunions.push(ReunionMapper.entityToDto(reunion));
        }
        return programme
    }

    public static dbToEntity(programmePMU: ProgrammePMU, programme: Programme) {
        programme.date = programmePMU.date ? new Date(programmePMU.date) : null;
        programme.dateProgrammeActif = programmePMU.dateProgrammeActif ? new Date(programmePMU.dateProgrammeActif) : null;
        programme.datesProgrammesDisponibles = [];
        programme.datesProgrammesDisponibles.push(...programmePMU.datesProgrammesDisponibles);
        programme.date_insert_db = new Date();
        const reunions = []
        for (let reunion of programme.reunions) {
            for (let reunionPMU of programmePMU.reunions) {
                if (reunionPMU.numOfficiel === reunion.num_officiel) {
                    reunions.push(ReunionMapper.dbToEntity(reunionPMU, reunion));
                }
            }
        }
        programme.reunions = reunions;
        return programme
    }
}