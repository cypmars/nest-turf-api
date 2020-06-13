import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Meteo } from 'src/database/models/meteo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MeteoDBService {
    constructor(@InjectRepository(Meteo) private readonly meteoRepository: Repository<Meteo>) {
        
    }
}
