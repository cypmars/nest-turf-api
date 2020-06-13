import { Test, TestingModule } from '@nestjs/testing';
import { MeteoDbService } from './meteo-db.service';

describe('MeteoDbService', () => {
  let service: MeteoDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeteoDbService],
    }).compile();

    service = module.get<MeteoDbService>(MeteoDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
