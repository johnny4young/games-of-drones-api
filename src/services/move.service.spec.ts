import { Test, TestingModule } from '@nestjs/testing';
import { MoveService } from './move.service';
import { listProviders } from '../commons/database/list.provider';
import { MoveDto } from '../commons/dto/move.dto';

describe('MoveService', () => {
	let service: MoveService;

	const moveGetAllResponse = [
		{
			id: 13,
			name: 'Rock',
			size: 1,
		},
		{
			id: 14,
			name: 'Scissors',
			size: 2,
		},
		{
			id: 15,
			name: 'Paper',
			size: 3,
		},
	];

 const movePutMoveRequest: MoveDto[] = [];
 
 movePutMoveRequest.push({ name: "Rock", size: 1});
 movePutMoveRequest.push({ name: "Scissors", size: 2});
 movePutMoveRequest.push({ name: "Paper", size: 3});
 

	const movePutMoveResponse = [
		{
			id: 13,
			name: 'Rock',
			size: 1,
		},
		{
			id: 14,
			name: 'Scissors',
			size: 2,
		},
		{
			id: 15,
			name: 'Paper',
			size: 3,
		},
	];

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [ MoveService, ...listProviders ],
		}).compile();

  service = module.get<MoveService>(MoveService);
  jest.spyOn(service, 'findAll').mockImplementation((limit: number = 10, offset: number = 0): any => {
			return Promise.resolve(moveGetAllResponse);
		});
		jest.spyOn(service, 'update').mockImplementation((movesDto: MoveDto[]): any => Promise.resolve(movePutMoveResponse));
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
  });

 it('Testing findAll function', () => {
		return expect(service.findAll()).resolves.toBe(moveGetAllResponse);
	});

	it('Testing update function', () => {
		return expect(service.update(movePutMoveRequest)).resolves.toBe(movePutMoveResponse);
	});

});
