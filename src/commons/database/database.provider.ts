import { Sequelize } from 'sequelize-typescript';
import { Player } from './entity/player.entity';
import { Move } from './entity/move.entity';

require('dotenv').config();

export const databaseProvider = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
          const sequelize = new Sequelize({
            dialect: 'postgres',
            protocol: 'postgres',
            dialectModule: require('pg'),
            host: process.env.HOST,
            port: +process.env.PORT,
            username: process.env.USERNAME || 'postgres',
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            dialectOptions: {
              ssl : Boolean(process.env.SSL),
            },
          });
          sequelize.addModels([Player, Move]);
          await sequelize.sync();
          return sequelize;
        },
      },
];
