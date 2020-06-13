import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Programme } from 'src/database/models/programme.entity';

@Injectable()
export class ProgrammeDBService {
    constructor(@InjectRepository(Programme) private readonly programmeRepository: Repository<Programme>) { }

    findByDate(date: Date): Promise<Programme> {
        return this.programmeRepository
            .createQueryBuilder("programme")
            .select("programme")
            .where("programme.date = :date", {date: '%' + date.toDateString() + '%'})
            .leftJoinAndSelect('programme.reunions', 'reunion')
            .leftJoinAndSelect('reunion.courses', 'course')
            .leftJoinAndSelect('reunion.meteo', 'meteo')
            .leftJoinAndSelect('meteo.nebulosite', 'nebulosite')
            .leftJoinAndSelect('reunion.pays', 'pays')
            .leftJoinAndSelect('reunion.hippodrome', 'hippodrome')
            .orderBy("programme", "DESC")
            .getOne();
    }

    createOrUpdateOne(programme: Programme): Promise<Programme> {
        return this.programmeRepository.save(programme);
    }
}
