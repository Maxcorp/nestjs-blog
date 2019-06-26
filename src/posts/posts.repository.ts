import { Repository, EntityRepository } from 'typeorm';
import { Posts } from './posts.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { Logger, InternalServerErrorException, HttpException, NotFoundException } from '@nestjs/common';
import * as urlSlug from 'url-slug';


@EntityRepository(Posts)
export class PostsRepository extends Repository<Posts> {
  
  async getPosts(): Promise<Posts[]> {
    const posts = await Posts.find({});

    return posts;
  }

  async createPost(createPostDto: CreatePostDto): Promise<Posts> {
    const { name, body } = createPostDto;

    const post = new Posts();
    post.name = name;
    post.slug = urlSlug(name);
    post.body = body;

    try {
        await post.save();
    } catch(error) {
        throw new InternalServerErrorException();
    }

    return post;
  }

  async updatePost(id, createPostDto: CreatePostDto): Promise<Posts> {
    const post = await Posts.findOne(id);
    
    if(!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }

    const { name, body } = createPostDto;

    post.name = name;
    post.slug = urlSlug(name);
    post.body = body;

    try {
        await post.save();
    } catch(error) {
        throw new InternalServerErrorException();
    }

    return post;
  }
}
