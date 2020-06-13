import { Entity, PrimaryGeneratedColumn, Column, OneToMany, PrimaryColumn, Index } from "typeorm";
import { Reunion } from "./reunion.entity";

@Entity()
export class Hippodrome {

    @PrimaryColumn()
    code: string;

    @Column()
    libelle_court: string;

    @Column()
    libelle_long: string;

    @OneToMany(type => Reunion, reunion => reunion.hippodrome)
    reunions: Reunion[];
}