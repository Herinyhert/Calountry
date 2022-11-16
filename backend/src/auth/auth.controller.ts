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
import { AuthService } from './auth.service';
import { CreateUserDto, UpdateUserDto } from './dto/index';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('users/register')
  create(@Body() createAuthDto: CreateUserDto) {
    return this.authService.create(createAuthDto);
  }

  @Get('users')
  findAll() {
    return this.authService.findAll();
  }

  @Get('users/:term')
  findOne(@Param('term') term: string) {
    return this.authService.findOne(term);
  }

  @Put('users/:id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateAuthDto: UpdateUserDto,
  ) {
    return this.authService.update(id, updateAuthDto);
  }

  @Delete('users/:id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.authService.remove(id);
  }
}
