import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from "typeorm";
import { Reunion } from "./reunion.entity";

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
}