import { Entity, OneToMany, PrimaryColumn, Column, PrimaryGeneratedColumn } from "typeorm";
import { Meteo } from "./meteo.entity";

@Entity()
export class Nebulosite {

    @PrimaryColumn()
    code: string;

    @Column()
    libelle_court: string;

    @Column()
    libelle_long: string;

    @OneToMany(type => Meteo, meteo => meteo.nebulosite)
    meteos: Meteo[];
}