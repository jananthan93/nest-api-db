import { Module } from '@nestjs/common';
import config from './db/config';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [config,PostsModule],
})
export class AppModule {}
