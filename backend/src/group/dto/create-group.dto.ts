
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDate, IsNotEmpty, IsOptional, IsUUID, MaxLength } from "class-validator";

export class CreateGroupDto {

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(45)
    name: string;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    start_date?: Date;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    end_date?: Date

    @ApiProperty()
    @IsUUID(undefined, {each: true})
    users?: string[];

}
