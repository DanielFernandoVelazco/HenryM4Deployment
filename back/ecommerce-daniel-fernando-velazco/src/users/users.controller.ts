import { Controller, Get, Post, Body, Param, Delete, HttpCode, HttpStatus, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }


  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 5
  ) {
    console.log(`Can find the following user rank: ${page} - ${limit}`);
    return this.usersService.findAll({ page, limit });
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }


  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateUser: UpdateUserDto) {
    return this.usersService.update(+id, updateUser);
  }


  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
