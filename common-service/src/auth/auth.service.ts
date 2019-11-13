import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
import { AuthCredentialDto } from './auth-credential-dto';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    private client: ClientProxy;

    constructor() {
      this.client = ClientProxyFactory.create({
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8001,
        },
      });
    }
    public signup(authCredencialDto:AuthCredentialDto){
        return this.client.send<AuthCredentialDto>('signup',authCredencialDto)
        
    }
    public getHello(str:string){
      return this.client.send<string,string>('str',str)
    }
}
