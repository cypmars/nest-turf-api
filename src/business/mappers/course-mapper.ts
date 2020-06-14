import { Course }  from "src/database/models/course.entity";
import { Course as CoursePMU } from "../models/programme";
import { CourseDTO, RecompenseDTO, PenetrometreDTO } from "src/api/models/course-dto";
import { CategorieStatut } from "src/database/models/course-relations/categorie-statut.entity";
import { CategorieParticularite } from "src/database/models/course-relations/categorie-particularite.entity";
import { ConditionAge } from "src/database/models/course-relations/condition-age.entity";
import { ConditionSexe } from "src/database/models/course-relations/condition-sexe.entity";
import { Corde } from "src/database/models/course-relations/corde.entity";
import { Discipline } from "src/database/models/course-relations/discipline.entity";
import { DistanceUnit } from "src/database/models/course-relations/distance-unit.entity";
import { Specialite } from "src/database/models/course-relations/specialite.entity";
import { Statut } from "src/database/models/course-relations/statut.entity";
import { TypePiste } from "src/database/models/course-relations/type-piste.entity";
import { Recompense } from "src/database/models/course-relations/recompense.entity";
import { Penetrometre } from "src/database/models/course-relations/penetrometre.entity";
export class CourseMapper {

    public static pmuToEntity(coursePMU: CoursePMU, dateReunion: Date, course?: Course): Course {
        if (!course) {
            course = new Course();
        }
        course.heure_depart = coursePMU.heureDepart ? new Date(coursePMU.heureDepart) : null;
        course.libelle = coursePMU.libelle;

        course.date_insert_db = new Date();
        course.num_ordre = coursePMU.numOrdre;
        course.num_externe = coursePMU.numExterne;
        course.libelle_court = coursePMU.libelleCourt;
        course.parcours = coursePMU.parcours;
        course.distance = coursePMU.distance;
        course.nombre_declares_partants = coursePMU.nombreDeclaresPartants;
        course.grand_prix_national_trot = coursePMU.grandPrixNationalTrot;
        course.num_societe_mere = coursePMU.numSocieteMere;
        course.pari_multi_courses = coursePMU.pariMultiCourses;
        course.pari_special = coursePMU.pariSpecial;
        course.conditions = coursePMU.conditions;
        course.num_course_dedoublee = coursePMU.numCourseDedoublee;
        course.pronostics_expires = coursePMU.pronosticsExpires;
        course.epc_pour_tous_paris = coursePMU.epcPourTousParis;
        course.course_trackee = coursePMU.courseTrackee;
        course.formule_champ_libre_indisponible = coursePMU.formuleChampLibreIndisponible;
        course.has_e_paris = coursePMU.hasEParis;
        course.duree_course = coursePMU.dureeCourse;
        course.replay_disponible = coursePMU.replayDisponible;

        course.categorie_statut = new CategorieStatut();
        course.categorie_statut.libelle = coursePMU.categorieStatut ? coursePMU.categorieStatut : 'NR';

        course.categorie_particularite = new CategorieParticularite();
        course.categorie_particularite.libelle = coursePMU.categorieParticularite ? coursePMU.categorieParticularite : 'NR';

        course.condition_age = new ConditionAge();
        course.condition_age.libelle = coursePMU.conditionAge ? coursePMU.conditionAge : 'NR';

        course.condition_sexe = new ConditionSexe();
        course.condition_sexe.libelle = coursePMU.conditionSexe ? coursePMU.conditionSexe : 'NR';

        course.corde = new Corde();
        course.corde.libelle = coursePMU.corde ? coursePMU.corde : 'NR';
        
        course.discipline = new Discipline();
        course.discipline.libelle = coursePMU.discipline ? coursePMU.discipline : 'NR';

        course.distance_unit = new DistanceUnit();
        course.distance_unit.libelle = coursePMU.distanceUnit ? coursePMU.distanceUnit : 'NR';

        course.specialite = new Specialite();
        course.specialite.libelle = coursePMU.specialite ? coursePMU.specialite : 'NR';

        course.statut = new Statut();
        course.statut.libelle = coursePMU.statut ? coursePMU.statut : 'NR';

        course.type_piste = new TypePiste();
        course.type_piste.libelle = coursePMU.typePiste ? coursePMU.typePiste : 'NR';

        if (coursePMU.montantTotalOffert != null) {
            const recompense = new Recompense();
            if (course && course.recompense) {
                recompense.id = course.recompense ? course.recompense.id : null;
            }
            recompense.course_heure_depart = course.heure_depart ;
            recompense.course_libelle = course.libelle;
            recompense.montant_offert_1er = coursePMU.montantOffert1er;
            recompense.montant_offert_2eme = coursePMU.montantOffert2eme;
            recompense.montant_offert_3eme = coursePMU.montantOffert3eme;
            recompense.montant_offert_4eme = coursePMU.montantOffert4eme;
            recompense.montant_offert_5eme = coursePMU.montantOffert5eme;
            recompense.montant_total_offert = coursePMU.montantTotalOffert;
            course.recompense = recompense;
        }

        if (coursePMU.penetrometre != null) {
            const penetrometre = new Penetrometre();
            if (course && course.penetrometre) {
                penetrometre.id = course.penetrometre ? course.penetrometre.id : null;
            }
            penetrometre.course_heure_depart = course.heure_depart ? course.heure_depart : null;
            penetrometre.course_libelle =  course.libelle;
            penetrometre.commentaire = coursePMU.penetrometre.commentaire;
            penetrometre.heure_mesure = coursePMU.penetrometre?.heureMesure ? new Date(coursePMU.penetrometre.heureMesure) : null;
            penetrometre.intitule = coursePMU.penetrometre.intitule;
            penetrometre.valeur_mesure = coursePMU.penetrometre?.valeurMesure;
            course.penetrometre = penetrometre;
        }
       
        course.date_reunion = dateReunion ? new Date(dateReunion) : null;
        course.num_reunion = coursePMU.numReunion;

        return course;
    }

    public static entityToDto(course: Course): CourseDTO {
        const courseDTO = new CourseDTO();
        courseDTO.heureDepart = course.heure_depart ? new Date(course.heure_depart).getTime() : null;
        courseDTO.libelle = course.libelle;

        courseDTO.numOrdre = course.num_ordre;
        courseDTO.numExterne = course.num_externe;
        courseDTO.libelleCourt = course.libelle_court;
        courseDTO.parcours = course.parcours;
        courseDTO.distance = course.distance;
        courseDTO.nombreDeclaresPartants = course.nombre_declares_partants;
        courseDTO.grandPrixNationalTrot = course.grand_prix_national_trot;
        courseDTO.numSocieteMere = course.num_societe_mere;
        courseDTO.pariMultiCourses = course.pari_multi_courses;
        courseDTO.pariSpecial = course.pari_special;
        courseDTO.conditions = course.conditions;
        courseDTO.numCourseDedoublee = course.num_course_dedoublee;
        courseDTO.pronosticsExpires = course.pronostics_expires;
        courseDTO.epcPourTousParis = course.epc_pour_tous_paris;
        courseDTO.courseTrackee = course.course_trackee;
        courseDTO.formuleChampLibreIndisponible = course.formule_champ_libre_indisponible;
        courseDTO.hasEParis = course.has_e_paris;
        courseDTO.dureeCourse = course.duree_course;
        courseDTO.replayDisponible = course.replay_disponible;
        courseDTO.rapportsDefinitifsDisponibles = course.rapports_definitifs_disponibles;

        courseDTO.categorieStatut = course.categorie_statut.libelle;
        courseDTO.categorieParticularite = course.categorie_particularite.libelle;
        courseDTO.conditionAge = course.condition_age.libelle;
        courseDTO.conditionSexe = course.condition_sexe.libelle;
        courseDTO.corde = course.corde.libelle;
        courseDTO.discipline = course.discipline.libelle;
        courseDTO.distanceUnit = course.distance_unit.libelle;
        courseDTO.specialite = course.specialite.libelle;
        courseDTO.statut = course.statut.libelle;
        courseDTO.typePiste = course.type_piste.libelle;
        
        courseDTO.recompense = new RecompenseDTO()
        if (course && course.recompense) {
            courseDTO.recompense.montantTotalOffert = course.recompense.montant_total_offert;
            courseDTO.recompense.montantOffert1er = course.recompense.montant_offert_1er;
            courseDTO.recompense.montantOffert2eme = course.recompense.montant_offert_2eme;
            courseDTO.recompense.montantOffert3eme = course.recompense.montant_offert_3eme;
            courseDTO.recompense.montantOffert4eme = course.recompense.montant_offert_4eme;
            courseDTO.recompense.montantOffert5eme = course.recompense.montant_offert_5eme;
        }

        courseDTO.penetrometre = new PenetrometreDTO();
        if (course && course.penetrometre) {
            courseDTO.penetrometre.commentaire = course.penetrometre.commentaire;
            courseDTO.penetrometre.heureMesure = course.penetrometre.heure_mesure;
            courseDTO.penetrometre.intitule = course.penetrometre.intitule;
            courseDTO.penetrometre.valeurMesure = course.penetrometre.valeur_mesure;
        }
    
        courseDTO.numReunion = course.num_reunion
        courseDTO.dateReunion = course.date_reunion ? new Date(course.date_reunion).getTime() : null;


        return courseDTO;
    }
}