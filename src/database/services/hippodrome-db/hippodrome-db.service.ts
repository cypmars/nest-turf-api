import { Injectable } from '@nestjs/common';
import { Hippodrome } from 'src/database/models/hippodrome.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HippodromeDBService {
    constructor(@InjectRepository(Hippodrome) private readonly hippodromeRepository: Repository<Hippodrome>){ }
}
