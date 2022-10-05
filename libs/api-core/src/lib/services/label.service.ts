import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Label, TransactionCategories } from '../models';
import {
  Transaction,
  TransactionDocument,
} from '../schemas/transaction.schema';

@Injectable()
export class LabelService {
  constructor(
    @InjectModel(Transaction.name)
    private readonly transactioModel: Model<TransactionDocument>
  ) {}

  async findAll(): Promise<Label[]> {
    return this.transactioModel
      .aggregate([
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
      ])
      .then((result: TransactionCategories[]) => {
        return result.map((tc: TransactionCategories) => {
          return Object.assign(
            {},
            {
              _id: tc._id,
              name: tc.name,
              type: tc.type,
              amount: tc.amount,
              color: tc.categories_info.color,
            }
          );
        });
      });
  }
}
