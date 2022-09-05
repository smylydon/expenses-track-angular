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

export interface Label {
  _id: string;
  name: string;
  type: string;
  amount: number;
  color: string;
}

@Injectable()
export class LabelService {
  constructor(
    @InjectModel(Transaction.name)
    private readonly transactioModel: Model<TransactionDocument>,
    @InjectModel(Categories.name)
    private readonly categoryModel: Model<CategoriesDocument>
  ) {}

  async findAll(): Promise<Label[] | string> {
    try {
      const result = await this.transactioModel.aggregate([
        {
          $lookup: {
            from: 'categories',
            localField: 'type',
            foreignField: 'type',
            as: 'categories_info',
          },
        },
        {
          $unwind: '$categories_info',
        },
      ]);
      const data = result.map((x) => {
        return Object.assign(
          {},
          {
            _id: x._id,
            name: x.name,
            type: x.type,
            amount: x.amount,
            color: x.categories_info['color'],
          }
        );
      });

      return <Promise<Label[]>>Promise.resolve(data);
    } catch (e) {
      return Promise.reject('Lookup Collection Crror.');
    }
  }
}
