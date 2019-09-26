import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import { MoveService } from '../services/move.service';
import { Move } from '../commons/database/entity/move.entity';
import { MoveDto } from '../commons/dto/move.dto';

@Controller('moves')
export class MoveController {

    constructor(private readonly moveService: MoveService ){}

    @Get()
    findAll(): Promise<Move[]> {
        return this.moveService.findAll();
    }


    @Put()
    addGame(@Body() moves: MoveDto[]): Promise<Move[]> {
        return this.moveService.update(moves);
    }
}
