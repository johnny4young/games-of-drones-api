
import { IsArray, ValidateNested, Length, MinLength } from 'class-validator';
import { MoveDto } from './move.dto';
import { Type } from 'class-transformer';

export class MovesDto {
    @IsArray()
    @ValidateNested({ each : true})
    @Type(() => MoveDto)
    rows: MoveDto[];
}
