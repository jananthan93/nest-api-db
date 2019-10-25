import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './auth-credential.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService:AuthService
    ){}

    @Post('/signup')
    async signUp(@Body(ValidationPipe) authCredentialDto:AuthCredentialDto):Promise<void>{
        return await this.authService.signUp(authCredentialDto);
    }
    @Post('/signin')
    async signIn(@Body(ValidationPipe) authCredentialDto:AuthCredentialDto){
        return await this.authService.signIn(authCredentialDto)
    }
}