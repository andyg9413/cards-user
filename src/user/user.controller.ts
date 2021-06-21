import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { User } from './models/user.model';
import { DeckDto } from './models/deck.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() dto: CreateUserDto): Promise<User> {
    return this.userService.create(dto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: CreateUserDto,
  ): Promise<User> {
    return this.userService.update(id, dto);
  }

  @Get()
  async finAll(): Promise<any[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<User> {
    return this.userService.find(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<User> {
    return this.userService.delete(id);
  }

  @Post('count')
  count(@Body() dto: DeckDto): any {
    return this.userService.countDecks(dto);
  }
}
