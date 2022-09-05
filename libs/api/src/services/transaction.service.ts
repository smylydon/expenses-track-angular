import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TransactionDto } from '../dto/transaction.dto';
import {
  Transaction,
  TransactionDocument,
} from '../schemas/transaction.schema';
import { CategoriesDto } from '../dto/categories.dto';
import { Categories, CategoriesDocument } from '../schemas/categories.schema';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(Transaction.name)
    private readonly model: Model<TransactionDocument>,
    @InjectModel(Categories.name)
    private readonly categoryModel: Model<CategoriesDocument>
  ) {}

  async findAll(): Promise<Transaction[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Transaction> {
    return await this.model.findById(id).exec();
  }

  async create(transactionDto: TransactionDto): Promise<Transaction> {
    return await new this.model({
      ...transactionDto,
    }).save();
  }

  async update(
    id: string,
    transactionDto: TransactionDto
  ): Promise<Transaction> {
    return await this.model.findByIdAndUpdate(id, transactionDto).exec();
  }

  async delete(id: string): Promise<Transaction> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
