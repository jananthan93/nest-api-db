import { Controller, Get, Body, Param, Delete, Put ,Post} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { Posts } from './interface/posts.interface';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService:PostsService){}
    
    @Get()
    async getPosts():Promise<Posts[]>{
        return await this.postsService.findAll() ;
    }
    @Get(':id')
    async getPostById(@Param('id') id):Promise<Posts>{
        return await this.postsService.findPostById(id);
    }


    @Put(':id')
    updatePostById(@Param('id')id , @Body() createPostDto:CreatePostDto):string{
        return  `updated id:${id}`;
    }

    @Delete(':id')
    deletePostById(@Param('id')id) :string{
        return `deleted id:${id}`;
    }
}
