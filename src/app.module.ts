import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://marcinmierzwa81:9dnhY8LHu2pCzcDB@quotes.qdnlb.mongodb.net/?retryWrites=true&w=majority&appName=Quotes'), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
