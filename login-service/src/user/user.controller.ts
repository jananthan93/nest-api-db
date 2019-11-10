import { Controller, Post, Body, ValidationPipe, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CredentialDto } from './credential.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserController {
    constructor(
        private userService:UserService
    ){}
    // @Post('/signup')
    @MessagePattern('signup')
    async signUp(@Body(ValidationPipe) credentialDto:CredentialDto):Promise<any>{
        return await this.userService.signUp(credentialDto);
    }
    // @Post('/signin')
    @MessagePattern('signin')
    async signIn(@Body() credentialDto:CredentialDto):Promise<any>{
        return await this.userService.signIn(credentialDto);
    }
    @MessagePattern('str')
    async printHello(str:string):Promise<string>{
    console.log(str);
    return str;
  }
}
