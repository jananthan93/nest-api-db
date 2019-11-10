import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './auth-credential-dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService:AuthService
    ){}

    @Get(':str')
  async getHello(@Param('str') str:string):Promise<any> {
    return await this.authService.getHello(str);
  }
  @Post('signup')
  async signUp(@Body() authCredencialDto:AuthCredentialDto):Promise<any>{
    return await this.authService.signup(authCredencialDto)
  }
}
