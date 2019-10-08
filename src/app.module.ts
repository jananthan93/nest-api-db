import { Module } from '@nestjs/common';
import { PostModule } from './posts/posts.module';

@Module({
  imports: [PostModule],
})
export class AppModule {}
