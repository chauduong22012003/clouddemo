import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Bill extends Document{
    @Prop()
    name: string;
    @Prop()
    cardnumber: string;
    @Prop()
    date: string;
    @Prop()
    cvc: string;
    @Prop()
    address: string;

}

export const BillSchema = SchemaFactory.createForClass(Bill).set('collection', 'bill');