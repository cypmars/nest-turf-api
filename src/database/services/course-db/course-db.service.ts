import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Course } from 'src/database/models/course.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CourseDBService {
    constructor(@InjectRepository(Course) private readonly courseRepository: Repository<Course>) {

    }
}
