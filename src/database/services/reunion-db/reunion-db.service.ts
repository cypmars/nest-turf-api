import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reunion } from 'src/database/models/reunion.entity';

@Injectable()
export class ReunionDBService {
    constructor(@InjectRepository(Reunion) private readonly reunionRepository: Repository<Reunion>) { }

    findBetweenDate(startDate: Date, endDate: Date): Promise<Reunion[]> {
        return this.reunionRepository
            .createQueryBuilder("reunion")
            .select("reunion")
            .where("reunion.date BETWEEN :startDate AND :endDate", {startDate: '%' + startDate + '%', endDate: '%' + endDate + '%'})
            .orderBy("reunion", "DESC")
            .getMany();
    }

    findByDate(date: Date): Promise<Array<Reunion>> {
        return this.reunionRepository
            .createQueryBuilder("reunion")
            .select("reunion")
            .where("reunion.date IS :startDate AND :endDate", {date: '%' + date + '%'})
            .orderBy("reunion", "DESC")
            .getMany();
    }

    findByKeys(date: Date, numOfficiel: number): Promise<Array<Reunion>> {
        return this.reunionRepository
            .createQueryBuilder("reunion")
            .select("reunion")
            .where("reunion.date = :date AND reunion.num_officiel = :numOfficiel", {date: '%' + date + '%', numofficiel: numOfficiel})
            .orderBy("reunion", "DESC")
            .getMany();
    }

    createOrUpdateOne(reunion: Reunion): Promise<Reunion> {
        return this.reunionRepository.save(reunion);
    }

    createOrUpdateWithArray(reunions: Reunion[]): Promise<Reunion[]> {
        const results = [];
        for (let reunion of reunions) {
            results.push(this.reunionRepository.save(reunion))
        }
        return Promise.all(results);
    }
}
