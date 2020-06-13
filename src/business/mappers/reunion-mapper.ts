import {Reunion as ReunionPMU, 
        HippodromeReunion, 
        Pays as PaysPMU, 
        Meteo as MeteoPMU
    } from "../models/programme";
import { Reunion } from "src/database/models/reunion.entity";
import { ReunionDTO, PaysDTO, MeteoDTO, NebulositeDTO } from "src/api/models/reunion-dto";
import { CourseDTO } from "src/api/models/course-dto";
import { Course } from "src/database/models/course.entity";
import { CourseMapper } from "./course-mapper";
import { Hippodrome } from "src/database/models/hippodrome.entity";
import { Pays } from "src/database/models/pays.entity";
import { Meteo } from "src/database/models/meteo.entity";
import { Nebulosite } from "src/database/models/nebulosite.entity";


export class ReunionMapper {
    public static pmuToEntity(reunionPMU: ReunionPMU): Reunion {
        const reunion = new Reunion();
        reunion.id = reunionPMU.id
        reunion.date_reunion = reunionPMU.dateReunion ? new Date(reunionPMU.dateReunion) : null;
        reunion.num_officiel = reunionPMU.numOfficiel;
        reunion.date_insert_db = new Date();
        reunion.audience = reunionPMU.audience;
        reunion.nature = reunionPMU.nature;
        reunion.num_externe = reunionPMU.numExterne;
        reunion.offres_internet = reunionPMU.offresInternet;
        reunion.report_plus_fpa_max = reunionPMU.reportPlusFpaMax;
        reunion.statut = reunionPMU.statut;
        reunion.hippodrome = this.pmuHippodromeToEntity(reunionPMU.hippodrome);
        reunion.pays = this.pmuPaysToEntity(reunionPMU.pays);
        reunion.meteo = this.pmuMeteoToEntity(reunionPMU.meteo, reunion);
        reunion.courses = new Array<Course>();
        for (let course of reunionPMU.courses) {
            reunion.courses.push(CourseMapper.pmuToEntity(course, reunion.date_reunion));
        }
        return reunion;
    }

    private static pmuHippodromeToEntity(hippodromePMU: HippodromeReunion, id?: number) {
        const hippodrome = new Hippodrome();
        hippodrome.code = hippodromePMU.code;
        hippodrome.libelle_court = hippodromePMU.libelleCourt;
        hippodrome.libelle_long = hippodromePMU.libelleLong;
        return hippodrome;
    }

    private static pmuPaysToEntity(paysPMU: PaysPMU) {
        const pays = new Pays();
        pays.code = paysPMU.code;
        pays.libelle = paysPMU.libelle;
        return pays;
    }

    private static pmuMeteoToEntity(meteoPMU: MeteoPMU, reunion?: Reunion) {
        const meteo = new Meteo();
        if (reunion && reunion.meteo) {
            meteo.id = reunion.meteo.id;
        }
        meteo.date_prevision = new Date(meteoPMU.datePrevision);
        meteo.direction_vent = meteoPMU.directionVent;
        meteo.force_vent = meteoPMU.forceVent;
        meteo.nebulosite = this.pmuNebulositeToEntity(meteoPMU.nebulositeCode, meteoPMU.nebulositeLibelleCourt, meteoPMU.nebulositeLibelleLong);
        meteo.num_reunion = reunion.num_officiel;
        meteo.date_reunion = reunion.date_reunion;
        return meteo;
    }

    private static pmuNebulositeToEntity(code: string, libelleCourt: string, libelleLong: string) {
        const nebulosite = new Nebulosite();
        nebulosite.code = code;
        nebulosite.libelle_court = libelleCourt;
        nebulosite.libelle_long = libelleLong;
        return nebulosite;
    }

    public static entityToDto(reunion: Reunion): ReunionDTO {
        const reunionDTO = new ReunionDTO();
        reunionDTO.dateReunion = reunion.date_reunion ? new Date(reunion.date_reunion).getTime() : null;
        reunionDTO.numOfficiel = reunion.num_officiel;
        reunionDTO.audience = reunion.audience;
        reunionDTO.nature = reunion.nature;
        reunionDTO.numExterne = reunion.num_externe;
        reunionDTO.offresInternet = reunion.offres_internet;
        reunionDTO.reportPlusFpaMax = reunion.report_plus_fpa_max;
        reunionDTO.statut = reunion.statut;

        reunionDTO.hippodrome = this.entityHippodromeToDTO(reunion.hippodrome);
        reunionDTO.pays = this.entityPaysToDTO(reunion.pays);
        reunionDTO.meteo = this.entityMeteoToDTO(reunion.meteo);

        reunionDTO.courses = new Array<CourseDTO>();
        for (let course of reunion.courses) {
            reunionDTO.courses.push(CourseMapper.entityToDto(course));
        }
        return reunionDTO;
    }

    private static entityHippodromeToDTO(hippodrome: Hippodrome) {
        const hippodromeDTO = new HippodromeReunion({});
        hippodromeDTO.code = hippodrome.code;
        hippodromeDTO.libelleCourt = hippodrome.libelle_court;
        hippodromeDTO.libelleLong = hippodrome.libelle_long;
        return hippodromeDTO;
    }

    private static entityPaysToDTO(pays: Pays) {
        const paysDTO = new PaysDTO();
        paysDTO.code = pays.code;
        paysDTO.libelle = pays.libelle;
        return paysDTO;
    }

    private static entityMeteoToDTO(meteo: Meteo) {
        const meteoDTO = new MeteoDTO();
        console.log(meteo);
        meteoDTO.datePrevision = meteo.date_prevision.getTime();
        meteoDTO.directionVent = meteo.direction_vent;
        meteoDTO.forceVent = meteo.force_vent;
        meteoDTO.temperature = meteo.temperature;
        meteoDTO.nebulosite = new NebulositeDTO();
        meteoDTO.nebulosite.code = meteo.nebulosite.code;
        meteoDTO.nebulosite.libelleCourt = meteo.nebulosite.libelle_court;
        meteoDTO.nebulosite.libelleLong = meteo.nebulosite.libelle_long;
        return meteoDTO;
    }

    public static dbToEntity(reunionPMU: ReunionPMU, reunion: Reunion) {
        reunion.date_reunion = reunionPMU.dateReunion ? new Date(reunionPMU.dateReunion) : null;
        reunion.num_officiel = reunionPMU.numOfficiel;
        reunion.date_insert_db = new Date();

        reunion.audience = reunionPMU.audience;
        reunion.nature = reunionPMU.nature;
        reunion.num_externe = reunionPMU.numExterne;
        reunion.offres_internet = reunionPMU.offresInternet;
        reunion.report_plus_fpa_max = reunionPMU.reportPlusFpaMax;
        reunion.statut = reunionPMU.statut;

        reunion.hippodrome = this.pmuHippodromeToEntity(reunionPMU.hippodrome);
        reunion.pays = this.pmuPaysToEntity(reunionPMU.pays);
        reunion.meteo = this.pmuMeteoToEntity(reunionPMU.meteo, reunion);

        const courses = []
        for (let course of reunion.courses) {
            for (let coursePMU of reunionPMU.courses) {
                if (course.libelle === coursePMU.libelle) {
                    courses.push(CourseMapper.dbToEntity(coursePMU, course, reunion.date_reunion));
                }
            }
        }
        reunion.courses = courses;
        return reunion;
    }
}