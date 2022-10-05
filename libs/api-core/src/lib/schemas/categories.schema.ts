import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoriesDocument = Categories & Document;

@Schema()
export class Categories {
  @Prop([String])
  type = 'Investment';

  @Prop([String])
  color = '#FCBE44';
}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);
