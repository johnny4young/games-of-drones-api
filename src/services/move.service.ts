import { Injectable, Inject } from '@nestjs/common'
import { Move } from '../commons/database/entity/move.entity'
import { MoveDto } from 'src/commons/dto/move.dto'

@Injectable()
export class MoveService {
	constructor(@Inject('MOVE_REPOSITORY') private readonly MOVE_REPOSITORY: typeof Move) {}

	async findAll(): Promise<Move[]> {
		return await this.MOVE_REPOSITORY.findAll<Move>({
			attributes: [ 'id', 'name', 'size' ]
		})
	}

	async update(movesDto: MoveDto[]): Promise<Move[]> {
		let promiseList = []
		movesDto.forEach((moveDto) => {
			promiseList.push(this.MOVE_REPOSITORY.update({ name: moveDto.name }, { where: { size: moveDto.size } }))
		})

		await Promise.all(promiseList)
		return await this.MOVE_REPOSITORY.findAll<Move>({
			attributes: [ 'id', 'name', 'size' ]
		})
	}
}
