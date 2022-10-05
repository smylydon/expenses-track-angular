import { Test, TestingModule } from '@nestjs/testing';
import { CategoryController } from './category.controller';
import { CategoryService } from '../../services/category.service';
import { NotFoundException } from '@nestjs/common';
import { CategoriesDto } from '../../dto/categories.dto';

describe('CategoryController', () => {
  let controller: CategoryController;
  let service: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [
        {
          provide: CategoryService,
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

    controller = module.get<CategoryController>(CategoryController);
    service = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should call categoryService.findAll', async () => {
      await controller.index();
      expect(service.findAll).toHaveBeenCalled();
    });

    it('should throw exception if categoryService.findAll throws exception', async () => {
      jest
        .spyOn(service, 'findAll')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(controller.index()).rejects.toThrow(new NotFoundException());
    });
  });

  describe('findOne', () => {
    const id = '123';
    it('should call categoryService.findOne', async () => {
      await controller.findOne(id);
      expect(service.findOne).toHaveBeenCalledWith(id);
    });

    it('should throw exception if categoryService.findOne throws exception', async () => {
      jest
        .spyOn(service, 'findOne')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(controller.findOne(id)).rejects.toThrow(
        new NotFoundException()
      );
    });
  });

  describe('create', () => {
    const category: CategoriesDto = <CategoriesDto>{
      type: 'Savings',
      color: '#ffffff',
    };
    it('should call categoryService.create', async () => {
      await controller.create(category);
      expect(service.create).toHaveBeenCalledWith(category);
    });

    it('should throw exception if categoryService.create throws exception', async () => {
      jest
        .spyOn(service, 'create')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(controller.create(category)).rejects.toThrow(
        new NotFoundException()
      );
    });
  });

  describe('update', () => {
    const id = '123';
    const category: CategoriesDto = <CategoriesDto>{
      type: 'Savings',
      color: '#ffffff',
    };
    it('should call categoryService.update', async () => {
      await controller.update(id, category);
      expect(service.update).toHaveBeenCalledWith(id, category);
    });

    it('should throw exception if categoryService.update throws exception', async () => {
      jest
        .spyOn(service, 'update')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(controller.update(id, category)).rejects.toThrow(
        new NotFoundException()
      );
    });
  });

  describe('delete', () => {
    const id = '123';
    it('should call categoryService.delete', async () => {
      await controller.delete(id);
      expect(service.delete).toHaveBeenCalledWith(id);
    });

    it('should throw exception if categoryService.delete throws exception', async () => {
      jest
        .spyOn(service, 'delete')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(controller.delete(id)).rejects.toThrow(
        new NotFoundException()
      );
    });
  });
});
