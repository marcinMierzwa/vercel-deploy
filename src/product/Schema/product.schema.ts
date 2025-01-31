import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema({
    versionKey: false,
    timestamps: false
})
export class Product extends Document {
    @Prop()
    name: string;
    @Prop()
    imageUrl: string;
    
}
export const ProductSchema = SchemaFactory.createForClass(Product);