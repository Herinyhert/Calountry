import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { GroupService } from './group.service';
import { CreateGroupDto, UpdateGroupDto } from './dto/index';
import { Auth } from 'src/auth/decorators';
import { UserRoles } from '../auth/enums/user.roles';

@ApiTags('Groups')
@ApiBearerAuth('Bearer')
@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post('create')
  @Auth(UserRoles.Admin)
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  @Get()
  findAll() {
    return this.groupService.findAll();
  }

  @Get('group-details/:id')
  findGroupWithMembers(@Param('id') id: string) {
    return this.groupService.getGroupWithMembers(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupService.findOne(id);
  }

  @Put(':id')
  @Auth(UserRoles.Admin)
  update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupService.update(id, updateGroupDto);
  }

  @Delete(':id')
  @Auth(UserRoles.Admin)
  remove(@Param('id') id: string) {
    return this.groupService.remove(id);
  }
}
