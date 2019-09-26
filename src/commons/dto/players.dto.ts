import { Player } from "../database/entity/player.entity";

export class PlayersDto {
    rows: Player[];
    count: number;
    limit: number;
    offset: number
}