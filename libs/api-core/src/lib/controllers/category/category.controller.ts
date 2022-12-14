import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesDto } from '../../dto/categories.dto';
import { CategoryService } from '../../services/category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() categoriesDto: CategoriesDto) {
    return await this.service.create(categoriesDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() categoriesDto: CategoriesDto) {
    return await this.service.update(id, categoriesDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
