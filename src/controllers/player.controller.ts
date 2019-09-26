import { Controller, Get, Put, Body } from '@nestjs/common';
import { Player } from 'src/commons/database/entity/player.entity';
import { PlayerDto } from 'src/commons/dto/player.dto';
import { PlayerService } from 'src/services/player.service';


@Controller('player')
export class PlayerController {

    constructor(private readonly playerService: PlayerService ){}

    @Get()
    findAll(): Promise<Player[]> {
        return this.playerService.findAll()
    }


    @Put()
    addGame(@Body() player: PlayerDto): Promise<Player> {
        return this.playerService.addGame(player);
    }
}
