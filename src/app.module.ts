import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { PlayerController } from './controllers/player.controller';
import { PlayerService } from './services/player.service';
import { DatabaseModule } from './commons/database/database.module';
import { listProviders } from './commons/database/list.provider';
import { MoveController } from './controllers/move.controller';
import { MoveService } from './services/move.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, PlayerController, MoveController],
  providers: [PlayerService, AppService, ...listProviders, MoveService],
})
export class AppModule {}
