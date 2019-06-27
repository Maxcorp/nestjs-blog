import { Repository, EntityRepository } from 'typeorm';
import { Posts } from './posts.entity';
import { PostDto } from './dto/post.dto';
import {
  Logger,
  InternalServerErrorException,
  HttpException,
  NotFoundException,
} from '@nestjs/common';
import * as urlSlug from 'url-slug';

import { CategoryRepository } from '../categories/category.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../categories/category.entity';
import { User } from '../auth/user.entity';

@EntityRepository(Posts)
export class PostsRepository extends Repository<Posts> {

  async getPosts(): Promise<Posts[]> {
    const posts = await Posts.find({});

    return posts;
  }

  async createPost(postDto: PostDto, category: Category, user: User): Promise<Posts> {
    const { name, body, categoryId } = postDto;

    const post = new Posts();
    post.name = name;
    post.slug = urlSlug(name);
    post.body = body;
    post.body = body;
    post.category = category;
    post.user = user;

    try {
      await post.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }

    return post;
  }

  async updatePost(id, postDto: PostDto, category: Category, user: User): Promise<Posts> {
    const post = await Posts.findOne({where: {id, userId: user.id}});

    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }

    const { name, body } = postDto;

    post.name = name;
    post.slug = urlSlug(name);
    post.body = body;
    post.category = category;
    post.user = user;

    try {
      await post.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }

    return post;
  }
}
