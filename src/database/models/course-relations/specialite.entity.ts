import { Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Course } from "../course.entity";

@Entity()
export class Specialite {
    
    @PrimaryColumn()
    libelle: string;

    @OneToMany(type => Course, course => course.specialite)
    courses: Course[];
}
