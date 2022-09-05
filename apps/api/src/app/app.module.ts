import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiModule } from '../../../../libs/api/src/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ApiModule, MongooseModule.forRoot(process.env.ATLAS_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
