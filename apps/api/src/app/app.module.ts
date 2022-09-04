import { Module } from '@nestjs/common';
import { ApiModule } from '../../../../libs/api/src/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
