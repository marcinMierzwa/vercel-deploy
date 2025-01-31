import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './Schema/product.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from './DTO/create-product-dto';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

    async getProducts() {
        return await this.productModel.find();
    }

    async createProduct(createProductDto: CreateProductDto) {
        return await this.productModel.create(createProductDto);
    }
}
