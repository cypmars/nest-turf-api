import { Test, TestingModule } from '@nestjs/testing';
import { NebulositeDbService } from './nebulosite-db.service';

describe('NebulositeDbService', () => {
  let service: NebulositeDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NebulositeDbService],
    }).compile();

    service = module.get<NebulositeDbService>(NebulositeDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
