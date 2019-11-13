import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import config from './db/config';

@Module({
  imports: [PostsModule,config],
  controllers: [],
  providers: [],
})
export class AppModule {}
