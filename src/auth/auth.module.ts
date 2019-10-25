import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';
import {  JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[
    TypeOrmModule.forFeature([UserRepository]),
    JwtModule.register({
      secret:'topSecretAuth123',
      signOptions:{
        expiresIn:3600
      }
    }),
    PassportModule.register({
      defaultStrategy:'jwt'
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
