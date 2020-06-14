import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index, OneToOne, ManyToMany } from "typeorm";
import { Reunion } from "./reunion.entity";
import { CategorieStatut } from "./course-relations/categorie-statut.entity";
import { ConditionAge } from "./course-relations/condition-age.entity";
import { ConditionSexe } from "./course-relations/condition-sexe.entity";
import { Corde } from "./course-relations/corde.entity";
import { Discipline } from "./course-relations/discipline.entity";
import { DistanceUnit } from "./course-relations/distance-unit.entity";
import { Specialite } from "./course-relations/specialite.entity";
import { Statut } from "./course-relations/statut.entity";
import { TypePiste } from "./course-relations/type-piste.entity";
import { Recompense } from "./course-relations/recompense.entity";
import { Penetrometre } from "./course-relations/penetrometre.entity";
import { CategorieParticularite } from "./course-relations/categorie-particularite.entity";
import { Participant } from "./participant.entity";

@Entity()
@Index((course: Course) => [course.heure_depart, course.libelle], { unique: true })
export class Course {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    heure_depart: Date;

    @Column()
    libelle: string;


    // Columns

    @Column()
    date_insert_db: Date;

    @Column()
    num_ordre: number;

    @Column()
    num_externe: number;

    @Column()
    libelle_court: string;

    @Column()
    parcours: string;

    @Column()
    distance: number;

    @Column()
    nombre_declares_partants: number;

    @Column()
    grand_prix_national_trot: boolean;

    @Column()
    num_societe_mere: number;
    
    @Column()
    pari_multi_courses: boolean;

    @Column()
    pari_special: boolean;

    @Column()
    conditions: string;

    @Column()
    num_course_dedoublee: number;
    
    @Column()
    pronostics_expires: boolean;

    @Column()
    epc_pour_tous_paris: boolean;

    @Column()
    course_trackee: boolean;

    @Column()
    formule_champ_libre_indisponible: boolean;

    @Column()
    has_e_paris: boolean;

    @Column()
    duree_course: number;   
    
    @Column()
    replay_disponible: boolean;  

    @Column()
    rapports_definitifs_disponibles: boolean;  


    // Foreign Keys

    @Column()
    date_reunion: Date;

    @Column()
    num_reunion: number;

    @ManyToOne(type => Reunion, reunion => reunion.courses, {primary: true})
    @JoinColumn([
        { name: "date_reunion", referencedColumnName: "date_reunion" },
        { name: "num_reunion", referencedColumnName: "num_officiel" },
      ])
    reunion: Reunion;


    @Column()
    categorie_statut_libelle: string;
  
    @ManyToOne(type => CategorieStatut, categorie => categorie.courses, {cascade: true, nullable: false })
    @JoinColumn([{ name: "categorie_statut_libelle", referencedColumnName: "libelle" }])
    categorie_statut: CategorieStatut;


    @Column()
    categorie_particularite_libelle: string;
  
    @ManyToOne(type => CategorieParticularite, particularite => particularite.courses, {cascade: true, nullable: false })
    @JoinColumn([{ name: "categorie_particularite_libelle", referencedColumnName: "libelle" }])
    categorie_particularite: CategorieParticularite;


    @Column()
    condition_age_libelle: string;
  
    @ManyToOne(type => ConditionAge, condition => condition.courses, {cascade: true, nullable: false })
    @JoinColumn([{ name: "condition_age_libelle", referencedColumnName: "libelle" }])
    condition_age: ConditionAge;


    @Column()
    condition_sexe_libelle: string;
  
    @ManyToOne(type => ConditionSexe, condition => condition.courses, {cascade: true, nullable: false })
    @JoinColumn([{ name: "condition_sexe_libelle", referencedColumnName: "libelle" }])
    condition_sexe: ConditionSexe;


    @Column()
    corde_libelle: string;
  
    @ManyToOne(type => Corde, corde => corde.courses, {cascade: true, nullable: false })
    @JoinColumn([{ name: "corde_libelle", referencedColumnName: "libelle" }])
    corde: Corde;


    @Column()
    discipline_libelle: string;
  
    @ManyToOne(type => Discipline, discipline => discipline.courses, {cascade: true, nullable: false })
    @JoinColumn([{ name: "discipline_libelle", referencedColumnName: "libelle" }])
    discipline: Discipline;


    @Column()
    distance_unit_libelle: string;
  
    @ManyToOne(type => DistanceUnit, unit => unit.courses, {cascade: true, nullable: false })
    @JoinColumn([{ name: "distance_unit_libelle", referencedColumnName: "libelle" }])
    distance_unit: DistanceUnit;


    @Column()
    specialite_libelle: string;
  
    @ManyToOne(type => Specialite, specialite => specialite.courses, {cascade: true, nullable: false })
    @JoinColumn([{ name: "specialite_libelle", referencedColumnName: "libelle" }])
    specialite: Specialite;


    @Column()
    statut_libelle: string;
  
    @ManyToOne(type => Statut, statut => statut.courses, {cascade: true, nullable: false })
    @JoinColumn([{ name: "statut_libelle", referencedColumnName: "libelle" }])
    statut: Statut;


    @Column()
    type_piste_libelle: string;
  
    @ManyToOne(type => TypePiste, type => type.courses, {cascade: true, nullable: false })
    @JoinColumn([{ name: "type_piste_libelle", referencedColumnName: "libelle" }])
    type_piste: TypePiste;


    @OneToOne(type => Recompense, recompense => recompense.course, { eager: true, cascade: true})
    recompense: Recompense;

    @OneToOne(type => Penetrometre, penetrometre => penetrometre.course, { eager: true, cascade: true})
    penetrometre: Penetrometre;

    @ManyToMany(type => Participant, participant => participant.courses, { cascade: true })
    participants: Participant[];
}