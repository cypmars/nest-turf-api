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

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'Cyprien13',
        database: 'api',
        entities: [Reunion, Programme, Course, Hippodrome, Pays, Meteo, Nebulosite],
        logging: true
        // synchronize: true
    }), TypeOrmModule.forFeature([Reunion, Course, Programme, Hippodrome, Pays, Meteo, Nebulosite])],
    providers: [ReunionDBService, ProgrammeDBService, CourseDBService, HippodromeDBService, PaysDBService, MeteoDBService, NebulositeDBService],
    exports: [ReunionDBService, ProgrammeDBService]
})
export class DatabaseModule {}
