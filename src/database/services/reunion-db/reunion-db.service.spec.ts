import { Test, TestingModule } from '@nestjs/testing';
import { ReunionDBService } from './reunion-db.service';

describe('ReunionService', () => {
  let service: ReunionDBService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReunionDBService],
    }).compile();

    service = module.get<ReunionDBService>(ReunionDBService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
