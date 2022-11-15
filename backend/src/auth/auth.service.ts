import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/index';

@Injectable()
export class AuthService {
  //TODO: Inject Repository

  //TODO: Create logic, encrypt password, error handling
  create(createAuthDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  //TODO: Create logic, error handling
  findAll() {
    return `This action returns all user`;
  }

  //TODO: Create logic, id: string, find by term, error handling
  findOne(term: string) {
    return `This action returns a #${term} user`;
  }

  //TODO: Create logic, error handling
  update(id: string, updateAuthDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  //TODO: Create logic, error handling
  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
