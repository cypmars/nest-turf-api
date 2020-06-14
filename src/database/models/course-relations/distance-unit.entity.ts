import { Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Course } from "../course.entity";

@Entity()
export class DistanceUnit {
    
    @PrimaryColumn()
    libelle: string;

    @OneToMany(type => Course, course => course.distance_unit)
    courses: Course[];
}
