import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiCoreModule } from '../../../../libs/api-core/src';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ApiCoreModule, MongooseModule.forRoot(process.env.ATLAS_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
