import { Player } from './entity/player.entity';
import { Move } from './entity/move.entity';

export const listProviders = [
  {
    provide: 'PLAYER_REPOSITORY', // todo create constants.ts for the magic strings
    useValue: Player,
  },
  {
    provide: 'MOVE_REPOSITORY', // todo create constants.ts for the magic strings
    useValue: Move,
  },
];
