import { Test, TestingModule } from '@nestjs/testing';
import { CourseDbService } from './course-db.service';

describe('CourseDbService', () => {
  let service: CourseDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseDbService],
    }).compile();

    service = module.get<CourseDbService>(CourseDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
