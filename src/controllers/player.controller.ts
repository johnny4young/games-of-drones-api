import { Controller, Get, Put, Body, Param } from '@nestjs/common';
import { Player } from '../commons/database/entity/player.entity';
import { PlayerDto } from '../commons/dto/player.dto';
import { PlayerService } from '../services/player.service';
import { PlayersDto } from '../commons/dto/players.dto';


@Controller('players')
export class PlayerController {

    constructor(private readonly playerService: PlayerService ){}

    @Get()
    findAll(@Param() params): Promise<PlayersDto> {
        return this.playerService.findAll(params.limit, params.offset);
    }


    @Put()
    addGame(@Body() player: PlayerDto): Promise<Player> {
        return this.playerService.addGame(player);
    }
}
