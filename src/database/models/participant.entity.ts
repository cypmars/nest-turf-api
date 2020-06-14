import { Entity, PrimaryGeneratedColumn, Index, Column, ManyToMany } from "typeorm";
import { Course } from "./course.entity";

@Entity()
@Index((participant: Participant) => [participant.nom], { unique: true })
export class Participant {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;
  
    @ManyToMany(type => Course, course => course.participants)
    courses: Course[]
}