import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { DummyDto, TransactionDto } from '../../dto/transaction.dto';
import { TransactionService } from '../../services/transaction.service';
import { TransactionController } from './transaction.controller';

describe('TransactionController', () => {
  let controller: TransactionController;
  let service: TransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionController],
      providers: [
        {
          provide: TransactionService,
          useValue: {
            create: jest.fn(() => []),
            findAll: jest.fn(() => []),
            findOne: jest.fn(() => {}),
            update: jest.fn(() => {}),
            delete: jest.fn(() => {}),
          },
        },
      ],
    }).compile();

    controller = module.get<TransactionController>(TransactionController);
    service = module.get<TransactionService>(TransactionService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should call transactionService.findAll', async () => {
      await controller.index();
      expect(service.findAll).toHaveBeenCalled();
    });

    it('should throw exception if transactionService.findAll throws exception', async () => {
      jest
        .spyOn(service, 'findAll')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(controller.index()).rejects.toThrow(new NotFoundException());
    });
  });

  describe('findOne', () => {
    const id = '123';
    it('should call transactionService.findOne', async () => {
      await controller.findOne(id);
      expect(service.findOne).toHaveBeenCalledWith(id);
    });

    it('should throw exception if transactionService.findOne throws exception', async () => {
      jest
        .spyOn(service, 'findOne')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(controller.findOne(id)).rejects.toThrow(
        new NotFoundException()
      );
    });
  });

  describe('create', () => {
    const transaction: TransactionDto = <TransactionDto>{
      name: 'car loan',
      type: 'Savings',
      date: null,
      color: '#ffffff',
      amount: 1234,
    };
    it('should call transactionService.create', async () => {
      await controller.create(transaction);
      expect(service.create).toHaveBeenCalledWith(transaction);
    });

    it('should throw exception if transactionService.create throws exception', async () => {
      jest
        .spyOn(service, 'create')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(controller.create(transaction)).rejects.toThrow(
        new NotFoundException()
      );
    });
  });

  describe('update', () => {
    const id = '123';
    const transaction: TransactionDto = <TransactionDto>{
      name: 'car loan',
      type: 'Savings',
      date: null,
      color: '#ffffff',
      amount: 1234,
    };
    it('should call transactionService.update', async () => {
      await controller.update(id, transaction);
      expect(service.update).toHaveBeenCalledWith(id, transaction);
    });

    it('should throw exception if transactionService.update throws exception', async () => {
      jest
        .spyOn(service, 'update')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(controller.update(id, transaction)).rejects.toThrow(
        new NotFoundException()
      );
    });
  });

  describe('delete', () => {
    const id: DummyDto = <DummyDto>{
      _id: '123',
    };
    it('should call transactionService.delete', async () => {
      await controller.delete(id);
      expect(service.delete).toHaveBeenCalledWith(id);
    });

    it('should throw exception if transactionService.delete throws exception', async () => {
      jest
        .spyOn(service, 'delete')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(controller.delete(id)).rejects.toThrow(
        new NotFoundException()
      );
    });
  });
});
