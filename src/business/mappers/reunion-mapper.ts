import { Reunion as ReunionPMU } from "../models/programme";
import { Reunion } from "src/database/models/reunion.entity";
import { ReunionDTO } from "src/api/models/reunion-dto";

export class ReunionMapper {
    public static pmuToEntity(reunionPMU: ReunionPMU): Reunion {
        const reunion = new Reunion();
        reunion.dateReunion = reunionPMU.dateReunion ? new Date(reunionPMU.dateReunion) : null;
        reunion.dateInsertDB = new Date();
        return reunion;
    }

    public static entityToDto(reunion: Reunion): ReunionDTO {
        const reunionDTO = new ReunionDTO();
        reunionDTO.dateReunion = reunion.dateReunion ? new Date(reunion.dateReunion) : null;
        return reunionDTO;
    }
}