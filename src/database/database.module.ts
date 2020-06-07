import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReunionDBService } from './services/reunion-db/reunion-db.service';
import { Reunion } from './models/reunion.entity'
import { ProgrammeDBService } from './services/programme-db/programme-db.service';
import { Programme } from './models/programme.entity';
@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'Cyprien13',
        database: 'api',
        entities: [Reunion, Programme],
        synchronize: true
    }), TypeOrmModule.forFeature([Reunion]), 
        TypeOrmModule.forFeature([Programme])],
    providers: [ReunionDBService, ProgrammeDBService],
    exports: [ReunionDBService, ProgrammeDBService]
})
export class DatabaseModule {}
