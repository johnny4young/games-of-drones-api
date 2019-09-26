import { Injectable } from '@nestjs/common';
import { Player } from 'src/commons/database/entity/player.entity';
import { PlayerDto } from 'src/commons/dto/player.dto';

@Injectable()
export class PlayerService {

    constructor(private readonly PLAYER_REPOSITORY: typeof Player){}

    async findAll(): Promise<Player[]> {
        return await this.PLAYER_REPOSITORY.findAll<Player>();
    }

    async addGame(userDto: PlayerDto): Promise<Player>{        
        return await this.PLAYER_REPOSITORY.create({...userDto});
    }
    
}
