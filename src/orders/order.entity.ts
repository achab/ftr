import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  buyerId: number;

  @Column()
  sellerId: number;

  @Column({ nullable: true })
  brokerId: number;

  @Column()
  status: string;

  @Column()
  price: number;
}
