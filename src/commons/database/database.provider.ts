import { Sequelize } from 'sequelize-typescript';
import { Player } from './entity/player.entity';


export const databaseProvider = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
          const sequelize = new Sequelize({
            dialect: 'postgres',
            host: 'localhost', //todo extract to environment variables(dev, prod)
            port: 5432,
            username: 'postgres',
            password: 'developer',
            database: 'postgres',
          });
          sequelize.addModels([Player]);
          await sequelize.sync();
          return sequelize;
        },
      },
]
