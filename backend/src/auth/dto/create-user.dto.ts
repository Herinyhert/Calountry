import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { UserRoles } from '../enums/user.roles';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  last_name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  user_name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @MinLength(1)
  email: string;

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a Uppercase, lowercase letter and a number',
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  country: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  gmt_zone: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  phone_number?: string;

  @IsOptional()
  @IsEnum(UserRoles)
  role: UserRoles;

  @IsString()
  @IsNotEmpty()
  technologies: string;
}
