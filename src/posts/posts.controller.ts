import { Controller, Get, Body, Param, Delete, Put ,Post, UseGuards} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostEntity } from './post.entity';
import { PostDto } from './post.dto';
import { UpdateResult, DeleteResult } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';

@Controller('posts')
@UseGuards(AuthGuard())
export class PostsController {
    constructor(private readonly postsService:PostsService){}
    @Post()
    createPost( @Body() postDto:PostDto):Promise<PostEntity>{
        return this.postsService.createPost(postDto) ;
    }

    @Get()
    async getPosts():Promise<PostEntity[]>{
        return await this.postsService.findPosts() ;
    }
    @Get(':id')
    async getPostById(@Param('id') id):Promise<PostEntity>{
        return await this.postsService.findPostById(id);
    }


    @Put(':id')
    updatePostById(@Param('id')id , @Body() postDto:PostDto):Promise<UpdateResult>{
        return this.postsService.updatePost(id,postDto);
    }

    @Delete(':id')
    deletePostById(@Param('id')id) :Promise<DeleteResult>{
        return this.postsService.deletePost(id);
    }
}
