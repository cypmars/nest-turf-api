import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pays } from 'src/database/models/pays.entity';

@Injectable()
export class PaysDBService {
    constructor(@InjectRepository(Pays) private readonly paysRepository: Repository<Pays>) {

    }
}
