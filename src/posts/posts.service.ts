import { Injectable, Inject, Scope } from '@nestjs/common';
import { PostEntity } from './post.entity';
import { PostRepository } from './post.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { PostDto } from './post.dto';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable({ scope: Scope.REQUEST })
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: PostRepository,
  ) {}

    createPost(postDto): Promise<PostDto>{
      return this.postRepository.save(postDto);
    }
    findPosts(): Promise<PostDto[]> {
      return this.postRepository.find();
    }
    findPostById(id):  Promise<PostDto> {
      return this.postRepository.findOne(id);
    }
    updatePost(id,postDto): Promise<UpdateResult>{
      return this.postRepository.update(id,postDto);
    }
    deletePost(id): Promise<DeleteResult>{
      return this.postRepository.delete(id);
    }
}
