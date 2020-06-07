import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Programme } from "./programme.entity";

@Entity()
export class Reunion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dateInsertDB: Date;

    @Column()
    dateReunion: Date;

    @ManyToOne(type => Programme, programme => programme.reunions)
    programme: Programme;
}