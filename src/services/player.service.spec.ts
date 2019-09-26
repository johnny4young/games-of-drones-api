import { Test, TestingModule } from '@nestjs/testing';
import { PlayerService } from './player.service';
import { PlayerDto } from '../commons/dto/player.dto';
import { listProviders } from '../commons/database/list.provider';

describe('PlayerService', () => {
	let service: PlayerService;

	const playerGetAllResponse = {
		count: 3,
		rows: [
			{
				id: 9,
				name: 'luffy',
				victory: 6,
			},
			{
				id: 19,
				name: 'Ponce',
				victory: 5,
			},
		],
		limit: 10,
		offset: 0,
	};

	const playerPutPlayerResponse = {
		id: 9,
		name: 'luffy',
		victory: 6,
		createdAt: '2019-09-26T21:02:44.759Z',
		updatedAt: '2019-09-26T23:20:14.866Z',
	};

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [ PlayerService, ...listProviders ],
		}).compile();

		service = module.get<PlayerService>(PlayerService);
		jest.spyOn(service, 'findAll').mockImplementation((limit: number = 10, offset: number = 0): any => {
			return Promise.resolve(playerGetAllResponse);
		});
		jest.spyOn(service, 'addGame').mockImplementation((playerDto: PlayerDto): any => {
			return Promise.resolve(playerPutPlayerResponse);
		});
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	it('Testing findAll function', () => {
		return expect(service.findAll()).resolves.toBe(playerGetAllResponse);
	});

	it('Testing addGame function', () => {
		return expect(service.addGame({ name: 'luffy' })).resolves.toBe(playerPutPlayerResponse);
	});
});
