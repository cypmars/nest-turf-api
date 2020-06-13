import { Entity, Column, OneToMany, PrimaryColumn, JoinColumn } from "typeorm";
import { Reunion } from "./reunion.entity";

@Entity()
export class Programme {

    @PrimaryColumn()
    date: Date;

    @Column()
    date_insert_db: Date;

    dateProgrammeActif: Date;

    datesProgrammesDisponibles: string[];
    
    @OneToMany(type => Reunion, reunion => reunion.programme, { cascade: true })
    reunions: Reunion[]
}