import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoriesDocument = Categories & Document;

@Schema()
export class Categories extends Document {
  @Prop()
  type: string = 'Investment';

  @Prop()
  color: string = '#FCBE44';
}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);
