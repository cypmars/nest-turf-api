import { PmuApiBean } from "../models/programme";
import { Programme } from "src/database/models/programme.entity";
import { ProgrammeDTO } from "src/api/models/programme-dto";
import { ReunionMapper } from "./reunion-mapper";
import { PmuApiService } from "../services/pmuapi/pmuapi.service";

export class ProgrammeMapper {
    public static pmuApiBeanToEntity(data: PmuApiBean): Programme {
        const programme = new Programme();
        programme.date = data.programme.date ? new Date(data.programme.date) : null;
        programme.dateProgrammeActif = data.programme.dateProgrammeActif ? new Date(data.programme.dateProgrammeActif) : null;
        programme.datesProgrammesDisponibles = [];
        programme.datesProgrammesDisponibles.push(...data.programme.datesProgrammesDisponibles);
        programme.date_insert_db = new Date();
        programme.reunions = [];
        for (let reunionPMU of data.programme.reunions) {
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

    public static dbToEntity(data: PmuApiBean, programme: Programme) {
        programme.date = data.programme.date ? new Date(data.programme.date) : null;
        programme.dateProgrammeActif = data.programme.dateProgrammeActif ? new Date(data.programme.dateProgrammeActif) : null;
        programme.datesProgrammesDisponibles = [];
        programme.datesProgrammesDisponibles.push(...data.programme.datesProgrammesDisponibles);
        programme.date_insert_db = new Date();
        const reunions = []
        for (let reunion of programme.reunions) {
            for (let reunionPMU of data.programme.reunions) {
                if (reunionPMU.numOfficiel === reunion.num_officiel) {
                    reunions.push(ReunionMapper.dbToEntity(reunionPMU, reunion));
                }
            }
        }
        programme.reunions = reunions;
        return programme
    }
}