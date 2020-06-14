import { Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Course } from "../course.entity";

@Entity()
export class TypePiste {
    
    @PrimaryColumn()
    libelle: string;

    @OneToMany(type => Course, course => course.type_piste)
    courses: Course[];
}
