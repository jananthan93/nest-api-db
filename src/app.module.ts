import { Module } from '@nestjs/common';
import config from './db/config';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';

@Module({
  imports: [
    config,
    PostsModule,
    AuthModule,
  ],
})
export class AppModule {}
