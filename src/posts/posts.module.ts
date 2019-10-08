import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { DatabaseModule } from '../database/database.module';
import { postProviders } from './posts.provider';

@Module({
  imports: [ DatabaseModule],
  controllers: [ PostsController],
  providers: [PostsService,...postProviders],
})
export class PostModule {}
