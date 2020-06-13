import { Test, TestingModule } from '@nestjs/testing';
import { PaysDbService } from './pays-db.service';

describe('PaysDbService', () => {
  let service: PaysDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaysDbService],
    }).compile();

    service = module.get<PaysDbService>(PaysDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
