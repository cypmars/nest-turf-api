import { Entity, Column, OneToOne, PrimaryGeneratedColumn, JoinColumn, Index } from "typeorm";
import { Course } from "../course.entity";

@Entity()
@Index((penetrometre: Penetrometre) => [penetrometre.course_heure_depart, penetrometre.course_libelle], { unique: true })
export class Penetrometre {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    valeur_mesure: string;

    @Column()
    heure_mesure: Date;

    @Column()
    intitule: string;

    @Column()
    commentaire: string;
  
    @Column()
    course_heure_depart: Date;

    @Column()
    course_libelle: string;

    @OneToOne(type => Course, course => course.penetrometre)
    @JoinColumn([{ name: "course_heure_depart", referencedColumnName: "heure_depart"}, { name: "course_libelle", referencedColumnName: "libelle"}])
    course: Course;
}
