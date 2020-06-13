import { Course }  from "src/database/models/course.entity";
import { Course as CoursePMU } from "../models/programme";
import { CourseDTO } from "src/api/models/course-dto";
export class CourseMapper {

    public static pmuToEntity(coursePMU: CoursePMU, dateReunion?): Course {
        const courseEntity = new Course();
        courseEntity.heure_depart = coursePMU.heureDepart ? new Date(coursePMU.heureDepart) : null;
        courseEntity.libelle = coursePMU.libelle;

        courseEntity.date_insert_db = new Date();
        courseEntity.date_reunion = dateReunion ? new Date(dateReunion) : null;
        courseEntity.num_reunion = coursePMU.numReunion;
        return courseEntity;
    }

    public static entityToDto(course: Course): CourseDTO {
        const courseDTO = new CourseDTO();
        courseDTO.numReunion = course.num_reunion
        courseDTO.dateReunion = course.date_reunion ? new Date(course.date_reunion).getTime() : null;
        courseDTO.heureDepart = course.heure_depart ? new Date(course.heure_depart).getTime() : null;
        courseDTO.libelle = course.libelle;
        return courseDTO;
    }

    public static dbToEntity(coursePMU: CoursePMU, courseEntity: Course, dateReunion?) {
        courseEntity.heure_depart = coursePMU.heureDepart ? new Date(coursePMU.heureDepart) : null;
        courseEntity.libelle = coursePMU.libelle;

        courseEntity.date_insert_db = new Date();
        console.log(dateReunion, coursePMU.numReunion);
        courseEntity.date_reunion = dateReunion ? new Date(dateReunion) : null;
        courseEntity.num_reunion = coursePMU.numReunion;
        return courseEntity;
    }
}