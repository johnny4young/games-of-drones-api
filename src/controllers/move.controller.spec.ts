import { Test, TestingModule } from '@nestjs/testing';
import { MoveController } from './move.controller';
import { MoveService } from '../services/move.service';
import { listProviders } from '../commons/database/list.provider';

describe('Move Controller', () => {
  let controller: MoveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoveController],
      providers: [MoveService, ...listProviders],
    }).compile();

    controller = module.get<MoveController>(MoveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
