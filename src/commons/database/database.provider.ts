import { Sequelize } from 'sequelize-typescript';
import { Player } from './entity/player.entity';

require('dotenv').config();

console.log(process.env.SSL)

export const databaseProvider = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
          const sequelize = new Sequelize({
            dialect: 'postgres',
            protocol: 'postgres',
            host: process.env.HOST,
            port: +process.env.PORT,
            username: process.env.USERNAME || 'postgres',
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            dialectOptions:{
              ssl : Boolean(process.env.SSL)
            }
          });
          sequelize.addModels([Player]);
          await sequelize.sync();
          return sequelize;
        },
      },
]
