import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  title: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  description: string;
}
