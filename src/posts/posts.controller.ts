import { Controller, Get, Body, Param, Delete, Put ,Post} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostEntity } from './post.entity';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService:PostsService){}
    
    @Get()
    async getPosts():Promise<PostEntity[]>{
        return await this.postsService.findPosts() ;
    }
    @Get(':id')
    async getPostById(@Param('id') id):Promise<PostEntity>{
        return await this.postsService.findPostById(id);
    }


    // @Put(':id')
    // updatePostById(@Param('id')id , @Body() createPostDto:CreatePostDto):string{
    //     return  `updated id:${id}`;
    // }

    @Delete(':id')
    deletePostById(@Param('id')id) :string{
        return `deleted id:${id}`;
    }
}
