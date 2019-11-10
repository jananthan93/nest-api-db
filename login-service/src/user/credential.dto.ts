import { IsString, MinLength, MaxLength, Matches } from "class-validator";

export class CredentialDto {
    @IsString()
    @MinLength(4)
    @MaxLength(15)
    userName:string;
    
    @IsString()
    @MinLength(8)
    @MaxLength(15)
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,{message:'password too weak'}
        )
    password:string;
}