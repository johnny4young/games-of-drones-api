import { IsString, IsNotEmpty } from 'class-validator';

export class PlayerDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    // victory:number;
}
