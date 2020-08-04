import { OrderStatus } from '../orders.constants';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({
    description: 'User id of the buyer.',
  })
  buyerId: number;

  @ApiProperty({
    description: 'User id of the seller',
  })
  sellerId: number;

  @ApiProperty({
    description: 'User id of the broker.',
    required: false,
  })
  brokerId: number;

  @ApiProperty({
    description: 'The status of the order.',
    enum: OrderStatus,
  })
  status: string;

  @ApiProperty({
    description: 'The price of the object.',
  })
  price: number;
}
