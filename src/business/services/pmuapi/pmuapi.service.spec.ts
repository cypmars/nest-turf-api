import { Test, TestingModule } from '@nestjs/testing';
import { PmuApiService } from './pmuapi.service';

describe('PmuApiService', () => {
  let service: PmuApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PmuApiService],
    }).compile();

    service = module.get<PmuApiService>(PmuApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
