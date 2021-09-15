import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  async findAll(): Promise<Post[]> {
    return await this.postModel.find();
  }

  async create(createPostInput: CreatePostInput): Promise<Post> {
    const newPost = new this.postModel(createPostInput);
    return await newPost.save();
  }
  
  // findOne(id: number) {
  //   return `This action returns a #${id} post`;
  // }

  async update(id: string, updatePostInput: UpdatePostInput): Promise<Post> {
    await this.postModel.findByIdAndUpdate(id, updatePostInput).exec();
    return await this.postModel.findById(id);
  }

  async remove(id: string) {
    return await this.postModel.findByIdAndDelete(id).exec();
  }
}
