import { Player } from './entity/player.entity';

export const listProviders = [
  {
    provide: 'PLAYER_REPOSITORY', //todo create constants.ts for the magic strings
    useValue: Player,
  }
];