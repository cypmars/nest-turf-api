import { Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Course } from "../course.entity";

@Entity()
export class Discipline {
    
    @PrimaryColumn()
    libelle: string;

    @OneToMany(type => Course, course => course.discipline)
    courses: Course[];
}
