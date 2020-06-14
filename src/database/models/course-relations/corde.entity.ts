import { Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Course } from "../course.entity";

@Entity()
export class Corde {
    
    @PrimaryColumn()
    libelle: string;

    @OneToMany(type => Course, course => course.corde)
    courses: Course[];
}
