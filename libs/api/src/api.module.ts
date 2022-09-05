import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryController } from './controllers/category/category.controller';
import { LabelController } from './controllers/label/label.controller';
import { TransactionController } from './controllers/transaction/transaction.controller';
import { CategoriesService } from './services/categories.service';
import { TransactionService } from './services/transaction.service';
import { LabelService } from './services/label.service';
import {
  Categories,
  CategoriesSchema,
  Transaction,
  TransactionSchema,
} from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Categories.name, schema: CategoriesSchema },
      { name: Transaction.name, schema: TransactionSchema },
    ]),
  ],
  controllers: [CategoryController, LabelController, TransactionController],
  providers: [CategoriesService, LabelService, TransactionService],
})
export class ApiModule {}
