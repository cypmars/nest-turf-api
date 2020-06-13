import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Reunion } from "./reunion.entity";
import { pairs } from "rxjs";

// @Entity()
// export class Cagnotte {
//     @PrimaryGeneratedColumn()
//     id: number;

//     @ManyToOne(type => Pari, pari => pari.cagnottes)
//     pari: Pari

//     @ManyToOne(type => Reunion, reunion => reunion.cagnottes)
//     reunion: Reunion;
// }