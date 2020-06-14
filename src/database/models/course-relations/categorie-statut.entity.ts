import { Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Course } from "../course.entity";

@Entity()
export class CategorieStatut {
    
    @PrimaryColumn()
    libelle: string;

    @OneToMany(type => Course, course => course.categorie_statut)
    courses: Course[];
}
