import { Controller, Get, Body, Param, Delete, Put ,Post, UseGuards} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostEntity } from './post.entity';
import { PostDto } from './post.dto';
import { UpdateResult, DeleteResult } from 'typeorm';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class PostsController {
    constructor(private readonly postsService:PostsService){}
    // @Post()
    @MessagePattern('posts')
    createPost( @Body() postDto:PostDto):Promise<PostEntity>{
        return this.postsService.createPost(postDto) ;
    }

    // @Get()
    @MessagePattern('getposts')
    async getPosts():Promise<PostEntity[]>{
        return await this.postsService.findPosts() ;
    }
    // @Get(':id')
    @MessagePattern('getPostById')
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
