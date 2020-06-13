import { Entity, Column, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Reunion } from "./reunion.entity";

@Entity()
export class Pays {
    
    @PrimaryColumn()
    code: string;

    @Column()
    libelle: string;

    @OneToMany(type => Reunion, reunion => reunion.pays)
    reunions: Reunion[];
}
