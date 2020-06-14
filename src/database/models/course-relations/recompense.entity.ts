import { Entity, Column, OneToOne, PrimaryGeneratedColumn, JoinColumn, Index } from "typeorm";
import { Course } from "../course.entity";

@Entity()
@Index((recompense: Recompense) => [recompense.course_heure_depart, recompense.course_libelle], { unique: true })
export class Recompense {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    montant_total_offert: number;

    @Column()
    montant_offert_1er: number;

    @Column()
    montant_offert_2eme: number;

    @Column()
    montant_offert_3eme: number;
    
    @Column()
    montant_offert_4eme: number;
    
    @Column()
    montant_offert_5eme: number;
  
    
    @Column()
    course_heure_depart: Date;

    @Column()
    course_libelle: string;

    @OneToOne(type => Course, course => course.recompense)
    @JoinColumn([{ name: "course_heure_depart", referencedColumnName: "heure_depart"}, { name: "course_libelle", referencedColumnName: "libelle"}])
    course: Course;
}
