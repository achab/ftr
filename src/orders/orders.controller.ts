import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Order } from './order.entity';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  index(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @Post('create')
  async create(@Body() orderData: Order): Promise<any> {
    return this.ordersService.create(orderData);
  }

  @Put('update/:id')
  async update(
    @Param('id') id: number,
    @Body() orderData: Order,
  ): Promise<any> {
    orderData.id = Number(id);
    console.log('Update #' + orderData.id);
    return this.ordersService.update(orderData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number): Promise<any> {
    return this.ordersService.delete(id);
  }
}
