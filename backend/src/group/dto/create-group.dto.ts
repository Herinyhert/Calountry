
import { IsArray, IsDate, IsNotEmpty, IsOptional, IsUUID, MaxLength } from "class-validator";

export class CreateGroupDto {

    @IsNotEmpty()
    @MaxLength(45)
    name: string;

    @IsDate()
    @IsOptional()
    start_date?: Date;

    @IsDate()
    @IsOptional()
    end_date?: Date

    @IsUUID(undefined, {each: true})

    users?: string[];

}
