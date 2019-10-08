import { Injectable, Inject } from '@nestjs/common';
import { Posts } from './interface/post.interface';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
    constructor(@Inject('POST_MODEL') private readonly postModel: Model<Posts>){}
    
    async create(createPostDto: CreatePostDto): Promise<Posts> {
        const createdPost = new this.postModel(createPostDto);
        return await createdPost.save();
      }
    
      async findAll(): Promise<Posts[]> {
        return await this.postModel.find()
      }
      async findPostById(id): Promise<Posts> {
        return await this.postModel.findById(id)
      }

      async modifyPostById(id,obj): Promise<Posts> {
        return await this.postModel.findByIdAndUpdate(id,obj, {new: true});
      }
      
      async deletePostById(id): Promise<Posts> {
        return await this.postModel.findByIdAndRemove(id);
      }
}
