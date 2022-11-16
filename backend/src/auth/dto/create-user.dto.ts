import {
  IsEmail,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsString()
  @MinLength(1)
  last_name: string;

  @IsString()
  @MinLength(1)
  user_name: string;

  @IsString()
  @IsEmail()
  @MinLength(1)
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a Uppercase, lowercase letter and a number',
  })
  password: string;

  @IsString()
  @MinLength(1)
  country: string;

  @IsString()
  @MinLength(1)
  gmt: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  phone_number?: string;
}
