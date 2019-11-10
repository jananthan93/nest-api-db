import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CredentialDto } from './credential.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository:UserRepository
    ){}
    async signUp(credentialDto:CredentialDto):Promise<any>{
        return this.userRepository.signup(credentialDto);
    }
    async signIn(credentialDto:CredentialDto):Promise<any>{
        const userName = await this.userRepository.validatePassword(credentialDto);
        if(!userName){
            throw new UnauthorizedException('Invalid Credencials !!')
        }
       return userName;
   }
}
