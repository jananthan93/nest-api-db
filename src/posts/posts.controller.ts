import { Controller, Get, Body, Param, Delete, Put ,Post} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Posts } from './interface/post.interface';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(
        private readonly postsService:PostsService
        ){}
    @Get()
   async getPosts():Promise<Posts[]>{
        return await this.postsService.findAll() ;
    }
    @Post()
  async  createPost(@Body()createPostDto:CreatePostDto):Promise<Posts>{
        return await this.postsService.create(createPostDto);
    }

    @Get(':id')
    async getPostById(@Param('id') id):Promise<Posts>{
        return await this.postsService.findPostById(id);
    }


    @Put(':id')
   async updatePostById(@Param('id')id , @Body() createPostDto:CreatePostDto):Promise<Posts>{
        return await this.postsService.modifyPostById(id,createPostDto);
    }

    @Delete(':id')
   async deletePostById(@Param('id')id) :Promise<Posts>{
        return await this.postsService.deletePostById(id);
    }
}
