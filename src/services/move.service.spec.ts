import { Test, TestingModule } from '@nestjs/testing';
import { MoveService } from './move.service';
import { listProviders } from '../commons/database/list.provider';

describe('MoveService', () => {
  let service: MoveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoveService, ...listProviders],
    }).compile();

    service = module.get<MoveService>(MoveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
