import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TransactionDto } from '../../dto/transaction.dto';
import { TransactionService } from '../../services/transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly service: TransactionService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() transactionDto: TransactionDto) {
    return await this.service.create(transactionDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() transactionDto: TransactionDto
  ) {
    return await this.service.update(id, transactionDto);
  }

  @Delete()
  async delete(@Body() bodyDto: { _id: string }) {
    const { _id } = bodyDto;
    return await this.service.delete(_id);
  }
}
