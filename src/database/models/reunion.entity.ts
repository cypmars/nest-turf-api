import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, Index, JoinColumn, PrimaryColumn } from "typeorm";
import { Programme } from "./programme.entity";
import { Course } from "./course.entity";
import { Hippodrome } from "./hippodrome.entity";
import { Pays } from "./pays.entity";
import { Meteo } from "./meteo.entity";

@Entity()
@Index((reunion: Reunion) => [reunion.date_reunion, reunion.num_officiel], {unique: true})
export class Reunion {

    // Primary Keys

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date_reunion: Date;

    @Column()
    num_officiel: number;

    // Columns

    @Column()
    date_insert_db: Date;

    @Column()
    audience: string;

    @Column()
    nature: string;

    @Column()
    num_externe: number;

    @Column()
    offres_internet: boolean;

    @Column()
    report_plus_fpa_max: number;

    @Column()
    statut: string;

    // Foreign Keys

    @Column()
    programme_date: number;

    @Column() 
    hippodrome_code: number;

    @Column()
    pays_code: number;

    @ManyToOne(type => Programme, programme => programme.reunions, {primary: true})
    @JoinColumn([{ name: "programme_date", referencedColumnName: "date" }])
    programme: Programme;

    @ManyToOne(type => Hippodrome, hippodrome => hippodrome.reunions, {cascade: true, nullable: false })
    @JoinColumn([{ name: "hippodrome_code", referencedColumnName: "code" }])
    hippodrome: Hippodrome;

    @ManyToOne(type => Pays, pays => pays.reunions, {cascade: true, nullable: false })
    @JoinColumn([{ name: "pays_code", referencedColumnName: "code" }])
    pays: Pays;

    @OneToOne(type => Meteo, meteo => meteo.reunion, { eager: true, cascade: true })
    @JoinColumn([
      { name: "date_reunion", referencedColumnName: "date_reunion" },
      { name: "num_officiel", referencedColumnName: "num_reunion" }
    ])
    meteo: Meteo;

    @OneToMany(type => Course, course => course.reunion, { cascade: true })
    courses: Array<Course>;
}