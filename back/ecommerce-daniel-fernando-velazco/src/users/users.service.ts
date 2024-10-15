import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) { }

  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  findAll() {
    return this.userRepository.findAll();

  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  update(id: number, updateUser: UpdateUserDto) {
    this.userRepository.update(id, updateUser);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    this.userRepository.remove(id);
    return `This action removes a #${id} user`;
  }
}
