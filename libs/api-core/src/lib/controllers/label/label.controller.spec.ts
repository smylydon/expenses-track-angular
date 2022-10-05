import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { LabelService } from '../../services/label.service';
import { LabelController } from './label.controller';

describe('LabelController', () => {
  let controller: LabelController;
  let service: LabelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LabelController],
      providers: [
        {
          provide: LabelService,
          useValue: {
            findAll: jest.fn(() => []),
          },
        },
      ],
    }).compile();

    controller = module.get<LabelController>(LabelController);
    service = module.get<LabelService>(LabelService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should call labelService.findAll', async () => {
      await controller.index();
      expect(service.findAll).toHaveBeenCalled();
    });

    it('should throw exception if labelService.findAll throws exception', async () => {
      jest
        .spyOn(service, 'findAll')
        .mockRejectedValueOnce(new NotFoundException());
      await expect(controller.index()).rejects.toThrow(new NotFoundException());
    });
  });
});
