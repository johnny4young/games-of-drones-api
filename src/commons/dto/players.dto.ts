import { Player } from '../database/entity/player.entity';
import { IsInt, IsArray, ValidateNested, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class PlayersDto {
    @IsArray()
    @ValidateNested({ each : true})
    @Type( () => Player)
    rows: Player[];
    @IsInt()
    @IsPositive()
    count: number;
    @IsInt()
    @IsPositive()
    limit: number;
    @IsInt()
    @IsPositive()
    offset: number;
}
