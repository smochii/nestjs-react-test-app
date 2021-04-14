import { IsString, IsNotEmpty, MaxLength } from "class-validator";

export class FindUserDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(15)
    readonly username: string;
}

