import { UserRole } from '../users.constants';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User role.',
    enum: UserRole,
  })
  role: string;

  @ApiProperty({
    description: 'First name of the user.',
    required: false,
  })
  firstName: string;

  @ApiProperty({
    description: 'Last name of the user.',
    required: false,
  })
  lastName: string;

  @ApiProperty({
    description: 'Organization name of the user.',
    required: false,
  })
  organizationName: string;

  @ApiProperty({
    description: 'Email of the user.',
  })
  email: string;

  @ApiProperty({
    description: 'Phone number of the user.',
  })
  phone: string;

  @ApiProperty({
    description: 'City where the user lies.',
  })
  city: string;

  @ApiProperty({
    description: 'Country where the user lies.',
  })
  country: string;
}
