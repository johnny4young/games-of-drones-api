import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { PlayerController } from './controllers/player.controller';
import { PlayerService } from './services/player.service';
import { DatabaseModule } from './commons/database/database.module';
import { listProviders } from './commons/database/list.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, PlayerController],
  providers: [PlayerService, AppService, ...listProviders],
})
export class AppModule {}
