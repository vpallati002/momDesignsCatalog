import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany
} from 'typeorm';

import { ProductEnity } from './product.entity';

  @Entity({ schema: 'neerajadesigns', name: 'Category' })
  export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column()
    isActive: boolean; 
  
    @Column({ type: 'varchar', length: 4000 })
    description: string;
  
    @Column({ type: 'varchar', length: 1000 })
    imagePath: string;
  
    @OneToMany(() => ProductEnity, (s) => s.category)
    products: ProductEnity[];
    
  }
  