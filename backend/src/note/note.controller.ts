import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
  Put,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Auth, GetUser } from 'src/auth/decorators';
import { User } from 'src/auth/entities/user.entity';
import { UserRoles } from '../auth/enums/user.roles';

@Controller('note')
@Auth()
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post('create')
  @Auth(UserRoles.Admin)
  create(@Body() createNoteDto: CreateNoteDto, @GetUser() user: User) {
    return this.noteService.create(createNoteDto, user);
  }

  @Get()
  @Auth(UserRoles.Admin, UserRoles.User, UserRoles.SuperUser)
  findAll(@GetUser() user: User) {
    return this.noteService.findAll(user);
  }

  @Get('note-details/:id')
  findOne(@Param('id') id: string) {
    return this.noteService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateNoteDto: UpdateNoteDto,
    user: User,
  ) {
    return this.noteService.update(id, updateNoteDto, user);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.noteService.remove(id);
  }
}
