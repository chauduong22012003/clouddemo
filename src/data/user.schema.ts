import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class User extends Document {
  @Prop()
  username: string;
  @Prop()
  password: string;
  public get getUsername(): string{
    return this.username;
  }
  public set setUsername(user: string){
    this.username=user;
  }
  public get getPass(): string{
    return this.password;
  }
  public set setPass(pass: string){
    this.password=pass;
  }
}
export const UserSchema = SchemaFactory.createForClass(User).set('collection', 'user');