import { Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Course } from "../course.entity";

@Entity()
export class CategorieParticularite {
    
    @PrimaryColumn()
    libelle: string;

    @OneToMany(type => Course, course => course.categorie_particularite)
    courses: Course[];
}
