import { Entity, Column, OneToMany, PrimaryColumn } from "typeorm";
import { Reunion } from "./reunion.entity";

@Entity()
export class Programme {

    @PrimaryColumn()
    date: Date;

    @Column()
    dateInsertDB: Date;

    dateProgrammeActif: Date;

    datesProgrammesDisponibles: string[];
    
    @OneToMany(type => Reunion, reunion => reunion.programme, { cascade: ['insert', 'update'] })
    reunions: Reunion[]
}