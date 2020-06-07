import { Test, TestingModule } from '@nestjs/testing';
import { ProgrammeDbService } from './programme-db.service';

describe('ProgrammeDbService', () => {
  let service: ProgrammeDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgrammeDbService],
    }).compile();

    service = module.get<ProgrammeDbService>(ProgrammeDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
