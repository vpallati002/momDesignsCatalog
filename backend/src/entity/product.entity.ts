import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne
} from 'typeorm';

import { CategoryEntity } from './category.entity';

  @Entity({ schema: 'neerajadesigns', name: 'Product' })
  export class ProductEnity {
    @PrimaryGeneratedColumn()
    id: number; 
  
    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column()
    isActive: boolean;
  
    @Column({ type: 'varchar', length: 4000 })
    description: string;
  
    @Column("simple-array")
    imagePaths: string[]

    @ManyToOne(() => CategoryEntity, {
      cascade: true,
    })
    category: CategoryEntity;
  
  }
  