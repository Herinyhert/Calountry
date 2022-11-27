import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { Repository } from 'typeorm';
import { User } from '../auth/entities/user.entity';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
    @Inject(AuthService)
    private readonly authService: AuthService,
  ) {}

  async create(createGroupDto: CreateGroupDto) {
    const { users = [], ...rest } = createGroupDto;

    const ids = await this.authService.findByIds(users);
    const saveGroup = this.groupRepository.create({
      ...rest,
      users: ids,
    });
    return await this.groupRepository.save(saveGroup);
  }

  async findAll() {
    const groups = await this.groupRepository.find();
    return groups;
  }

  async getGroupWithMembers(id: string){
    const group = await this.groupRepository.find({
      relations: ['users'],
      where: {id: id}
    })
    return group;
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

  // private handleDBExceptions(error: any): never {
  //   if (error.code === '23505') {
  //     throw new BadRequestException(error.detail);
  //   }
  //   this.logger.error(error);
  //   throw new InternalServerErrorException(
  //     'Unexpected error, check server logs',
  //   );
  // }
}
