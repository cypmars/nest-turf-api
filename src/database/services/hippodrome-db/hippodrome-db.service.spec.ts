import { Test, TestingModule } from '@nestjs/testing';
import { HippodromeDbService } from './hippodrome-db.service';

describe('HippodromeDbService', () => {
  let service: HippodromeDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HippodromeDbService],
    }).compile();

    service = module.get<HippodromeDbService>(HippodromeDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
