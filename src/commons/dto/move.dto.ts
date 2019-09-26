
import { IsString, IsInt, Min, Max, IsNotEmpty } from 'class-validator';

export class MoveDto {

    @IsString()
    @IsNotEmpty()
    name: string;
    @IsInt()
    @Min(1)
    @Max(3)
    size: number;
}
