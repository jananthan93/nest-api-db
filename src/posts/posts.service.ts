import { Injectable, Inject } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Posts } from './interface/posts.interface';

@Injectable()
export class PostsService {
    private readonly posts : Posts[] =[
      {id:"5d9b6478f641f239b097a9ff",title:"post1",content:"content for post1"},
      {id:"5d9b6478f641f239b097a9fs",title:"post2",content:"content for post2"}
    ]
    async findAll(): Promise<Posts[]> {
      return await this.posts
    }
    async findPostById(id):  Promise<Posts> {
      return await this.posts.find(post=>post.id===id)
    }
    
}
