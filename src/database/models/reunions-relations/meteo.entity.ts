import { Entity, Column, OneToMany, OneToOne, Index, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Reunion } from "./reunion.entity";
import { Nebulosite } from "./nebulosite.entity";

@Entity()
@Index((meteo: Meteo) => [meteo.date_reunion, meteo.num_reunion], { unique: true })
export class Meteo {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    date_prevision: Date;
    
    @Column()
    temperature: number;

    @Column()
    force_vent: number;

    @Column()
    direction_vent: string;
    
    @Column()
    date_reunion: Date;

    @Column()
    num_reunion: number;

    @OneToOne(type => Reunion, reunion => reunion.meteo)
    @JoinColumn([{ name: "num_reunion", referencedColumnName: "num_officiel"}, { name: "date_reunion", referencedColumnName: "date_reunion"}])
    reunion: Reunion;

    @ManyToOne(type => Nebulosite, nebulosite => nebulosite.meteos, {cascade: true, nullable: false, onUpdate: "CASCADE"})
    @JoinColumn([{ name: "nebulosite_code", referencedColumnName: "code" }])
    nebulosite: Nebulosite;
}