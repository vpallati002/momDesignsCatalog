import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { ProductEnity } from './product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CategoryEntity, ProductEnity
    ]),
  ],
  exports: [TypeOrmModule],
})
export class EntityModule {}
