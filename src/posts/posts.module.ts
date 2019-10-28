import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './post.entity';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { AuthModule } from '../auth/auth.module';

@Module({
imports: [
  TypeOrmModule.forFeature([PostEntity] ),
  AuthModule
],
  controllers: [ PostsController],
  providers: [PostsService],
})
export class PostsModule {}
