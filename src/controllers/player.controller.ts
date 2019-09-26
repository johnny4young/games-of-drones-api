import { Controller, Get, Put, Body, Param, Query, UsePipes } from '@nestjs/common';
import { Player } from '../commons/database/entity/player.entity';
import { PlayerDto } from '../commons/dto/player.dto';
import { PlayerService } from '../services/player.service';
import { PlayersDto } from '../commons/dto/players.dto';
import { ValidationPipe } from '../commons/utils/validation.pipe';

@Controller('players')
export class PlayerController {

    constructor(private readonly playerService: PlayerService ) {}

    @Get()
    findAll(@Query() queries): Promise<PlayersDto> {
        return this.playerService.findAll(queries.limit, queries.offset);
    }

    @Put()
    @UsePipes(new ValidationPipe())
    addGame(@Body() player: PlayerDto): Promise<Player> {
        return this.playerService.addGame(player);
    }
}
