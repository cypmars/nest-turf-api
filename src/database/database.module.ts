import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReunionDBService } from './services/reunion-db/reunion-db.service';
import { Reunion } from './models/reunion.entity'
import { ProgrammeDBService } from './services/programme-db/programme-db.service';
import { Programme } from './models/programme.entity';
import { Course } from './models/course.entity';
import { Hippodrome } from './models/hippodrome.entity';
import { Pays } from './models/pays.entity';
import { Meteo } from './models/meteo.entity';
import { Nebulosite } from './models/nebulosite.entity';
import { CourseDBService } from './services/course-db/course-db.service';
import { HippodromeDBService } from './services/hippodrome-db/hippodrome-db.service';
import { PaysDBService } from './services/pays-db/pays-db.service';
import { MeteoDBService } from './services/meteo-db/meteo-db.service';
import { NebulositeDBService } from './services/nebulosite-db/nebulosite-db.service';
import { CategorieStatut } from './models/course-relations/categorie-statut.entity';
import { Corde } from './models/course-relations/corde.entity';
import { ConditionAge } from './models/course-relations/condition-age.entity';
import { ConditionSexe } from './models/course-relations/condition-sexe.entity';
import { DistanceUnit } from './models/course-relations/distance-unit.entity';
import { Recompense } from './models/course-relations/recompense.entity';
import { Discipline } from './models/course-relations/discipline.entity';
import { Statut } from './models/course-relations/statut.entity';
import { Specialite } from './models/course-relations/specialite.entity';
import { TypePiste } from './models/course-relations/type-piste.entity';
import { CategorieParticularite } from './models/course-relations/categorie-particularite.entity';
import { Penetrometre } from './models/course-relations/penetrometre.entity';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'Cyprien13',
        database: 'api',
        entities: [
            Reunion, Programme, Course, Hippodrome, 
            Pays, Meteo, Nebulosite, CategorieStatut, 
            ConditionSexe, ConditionAge, Corde, Discipline,
            DistanceUnit, Penetrometre, Recompense,
            Specialite, Statut, TypePiste, CategorieParticularite
        ],
        logging: true
        // synchronize: true
    }), TypeOrmModule.forFeature([
        Reunion, Programme, Course, Hippodrome, 
            Pays, Meteo, Nebulosite, CategorieStatut, 
            ConditionSexe, ConditionAge, Corde, Discipline,
            DistanceUnit, Penetrometre, Recompense,
            Specialite, Statut, TypePiste, CategorieParticularite
    ])],
    providers: [
        ReunionDBService, ProgrammeDBService, 
        CourseDBService, HippodromeDBService, 
        PaysDBService, MeteoDBService, 
        NebulositeDBService],
    exports: [ReunionDBService, ProgrammeDBService]
})
export class DatabaseModule {}
