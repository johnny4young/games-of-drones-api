import { Controller, Get, Put, Param, Body, UsePipes } from '@nestjs/common';
import { MoveService } from '../services/move.service';
import { Move } from '../commons/database/entity/move.entity';
import { ValidationPipe } from '../commons/utils/validation.pipe';
import { MovesDto } from '../commons/dto/moves.dto';

@Controller('moves')
export class MoveController {

    constructor(private readonly moveService: MoveService ) {}

    @Get()
    findAll(): Promise<Move[]> {
        return this.moveService.findAll();
    }

    @Put()
    @UsePipes(new ValidationPipe())
    addGame(@Body() moves: MovesDto): Promise<Move[]> {
        return this.moveService.update(moves.rows);
    }
}
