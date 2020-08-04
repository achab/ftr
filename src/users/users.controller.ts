import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  index(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post('create')
  async create(@Body() userData: User): Promise<any> {
    return this.usersService.create(userData);
  }

  @Put('update/:id')
  async update(@Param('id') id: number, @Body() userData: User): Promise<any> {
    userData.id = Number(id);
    console.log('Update #' + userData.id);
    return this.usersService.update(userData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number): Promise<any> {
    return this.usersService.delete(id);
  }
}
