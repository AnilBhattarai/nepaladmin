import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop()
  username: string;

  @Prop()
  password: string;
}

export const CatSchema = SchemaFactory.createForClass(Users);
