import { Injectable, Inject, Scope } from '@nestjs/common';
import { PostEntity } from './post.entity';
import { PostRepository } from './post.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { PostDto } from './post.dto';

@Injectable({ scope: Scope.REQUEST })
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: PostRepository,
  ) {}
    findPosts(): Promise<PostDto[]> {
      return this.postRepository.find();
    }
    findPostById(id):  Promise<PostDto> {
      return this.postRepository.findOne(id);
    }
    
}
