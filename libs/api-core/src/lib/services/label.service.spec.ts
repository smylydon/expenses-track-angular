import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  closeInMongodConnection,
  rootMongooseTestModule,
} from '../test-utils/mongo/MongooseTestModule';
import {
  TransactionSchema,
  Transaction,
  Categories,
  CategoriesSchema,
  TransactionDocument,
} from '../schemas';
import { LabelService } from './/label.service';
import { NotFoundException } from '@nestjs/common';

const categories = [
  { type: 'Savings', color: '#1f3b5c' },
  { type: 'Expense', color: '#c43095' },
  { type: 'Investment', color: '#fcbe44' },
];
const transactions = [
  { name: 'Amazon shares', type: 'Investment', amount: 323 },
  { name: 'Chase checking', type: 'Savings', amount: 223 },
  { name: 'Car loan', type: 'Expense', amount: 335 },
];

describe('LabelService', () => {
  let service: LabelService;
  let model: Model<TransactionDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        await rootMongooseTestModule(),
        MongooseModule.forFeature([
          { name: Categories.name, schema: CategoriesSchema },
          { name: Transaction.name, schema: TransactionSchema },
        ]),
      ],
      providers: [LabelService],
    }).compile();

    service = module.get<LabelService>(LabelService);
    model = module.get<Model<TransactionDocument>>('TransactionModel');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should call model.aggregate', async () => {
      let spy = jest.spyOn(model, 'aggregate');

      await service.findAll();
      expect(spy).toHaveBeenCalled();
    });

    // it('should call then after model.aggregate', async () => {
    //   let spy = jest.spyOn(model, 'then');
    //   model.aggregate();

    //   await service.findAll();
    //   expect(spy).toHaveBeenCalled();
    // });

    it('should throw exception if aggregate throws exception', async () => {
      jest
        .spyOn(model, 'aggregate')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(service.findAll()).rejects.toThrow(new NotFoundException());
    });
  });

  afterAll(async () => {
    await closeInMongodConnection();
  });
});
