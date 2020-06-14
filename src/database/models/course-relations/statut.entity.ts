import { Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Course } from "../course.entity";

@Entity()
export class Statut {
    
    @PrimaryColumn()
    libelle: string;

    @OneToMany(type => Course, course => course.statut)
    courses: Course[];
}
