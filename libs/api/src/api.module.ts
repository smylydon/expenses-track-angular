import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { CategoryController } from './category/category.controller';
import { LabelController } from './label/label.controller';
import { TransactionController } from './transaction/transaction.controller';

@Module({
  imports: [CategoryController, LabelController, TransactionController],
  providers: [ApiService],
  exports: [ApiService],
})
export class ApiModule {}
