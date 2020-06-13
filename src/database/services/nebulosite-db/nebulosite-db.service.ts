import { Injectable } from '@nestjs/common';
import { Nebulosite } from 'src/database/models/nebulosite.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NebulositeDBService {
    constructor(@InjectRepository(Nebulosite) private readonly nebulositeRepository: Repository<Nebulosite>) { } 
}
