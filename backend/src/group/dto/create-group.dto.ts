import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  name: string;

  @IsString()
  @IsOptional()
  start_date?: string;

  @IsString()
  @IsOptional()
  end_date?: string;
}
