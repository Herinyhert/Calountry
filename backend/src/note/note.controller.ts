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
import { UserRoles } from 'src/auth/enums/user.roles';

@Controller('note')
@Auth(UserRoles.User)
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post('create')
  create(@Body() createNoteDto: CreateNoteDto, @GetUser() user: User) {
    return this.noteService.create(createNoteDto, user);
  }

  @Get()
  findAll() {
    return this.noteService.findAll();
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
