import { IsString, IsNotEmpty, MaxLength } from "class-validator";

export class AuthenticationDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(15)
    readonly username: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    readonly password: string;
}