import { Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Course } from "../course.entity";

@Entity()
export class ConditionAge {
    
    @PrimaryColumn()
    libelle: string;

    @OneToMany(type => Course, course => course.condition_age)
    courses: Course[];
}
