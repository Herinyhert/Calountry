import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGroupDto, UpdateGroupDto } from './dto/index';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupService {
  private readonly logger = new Logger('GroupService');

  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
  ) {}

  async create(createGroupDto: CreateGroupDto) {
    try {
      const group = this.groupRepository.create(createGroupDto);
      await this.groupRepository.save(group);
      return group;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    const groups = await this.groupRepository.find();
    return groups;
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }

  private handleDBExceptions(error: any): never {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
