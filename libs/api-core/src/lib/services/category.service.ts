import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoriesDto } from '../dto/categories.dto';
import { Categories, CategoriesDocument } from '../schemas/categories.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Categories')
    private readonly model: Model<CategoriesDocument>
  ) {}

  async findAll(): Promise<Categories[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Categories> {
    return await this.model.findById(id).exec();
  }

  async create(categoriesDto: CategoriesDto): Promise<Categories> {
    return await new this.model({
      ...categoriesDto,
    }).save();
  }

  async update(id: string, categoriesDto: CategoriesDto): Promise<Categories> {
    return await this.model.findByIdAndUpdate(id, categoriesDto).exec();
  }

  async delete(id: string): Promise<Categories> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
