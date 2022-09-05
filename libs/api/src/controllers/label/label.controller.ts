import { Controller, Get } from '@nestjs/common';

import { LabelService } from '../../services/label.service';

@Controller('label')
export class LabelController {
  constructor(private readonly service: LabelService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }
}
