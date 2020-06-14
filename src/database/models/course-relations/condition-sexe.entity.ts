import { Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Course } from "../course.entity";

@Entity()
export class ConditionSexe {
    
    @PrimaryColumn()
    libelle: string;

    @OneToMany(type => Course, course => course.condition_sexe)
    courses: Course[];
}
