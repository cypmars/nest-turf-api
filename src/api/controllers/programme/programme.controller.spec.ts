import { Test, TestingModule } from '@nestjs/testing';
import { ProgrammeController } from './programme.controller';

describe('Programme Controller', () => {
  let controller: ProgrammeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgrammeController],
    }).compile();

    controller = module.get<ProgrammeController>(ProgrammeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
