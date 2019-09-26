import { Injectable, Inject } from '@nestjs/common';
import { Player } from '../commons/database/entity/player.entity';
import { PlayerDto } from '../commons/dto/player.dto';
import { PlayersDto } from '../commons/dto/players.dto';

@Injectable()
export class PlayerService {

    constructor(
        @Inject('PLAYER_REPOSITORY') private readonly PLAYER_REPOSITORY: typeof Player){}

    async findAll(limit: number = 10, offset: number = 0): Promise<PlayersDto> {
        const foundAllPlayers = await this.PLAYER_REPOSITORY.findAndCountAll<Player>(
        {
            attributes: ['id', 'name', 'victory'],
            order: [
                ['victory', 'DESC']
            ],
            limit: limit,
            offset: offset
        });

        return {
            ...foundAllPlayers,
            limit,
            offset
        }
    }

    async addGame(playerDto: PlayerDto): Promise<Player>{ 
        //check player or create if doesn't exits       
        const [player, created] = await this.PLAYER_REPOSITORY.findOrCreate({ where : { name : playerDto.name}, defaults:  { victory: 1}});
        
        if( created ) return player;

        player.victory = player.victory + 1;

        return await player.save()
    }
    
}
