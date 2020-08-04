import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async findAll(): Promise<Order[]> {
    return await this.orderRepository.find();
  }

  async create(order: Order): Promise<Order> {
    return await this.orderRepository.save(order);
  }

  async update(order: Order): Promise<UpdateResult> {
    return await this.orderRepository.update(order.id, order);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.orderRepository.delete(id);
  }
}
