import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Patch,
    Query,
    UsePipes,
    ValidationPipe,
    ParseIntPipe,
    UseGuards,
    Logger,
    NotFoundException,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { PostsRepository } from './posts.repository';

import { Injectable } from '@nestjs/common';
import { PostDto } from './dto/post.dto';
import { Posts } from './posts.entity';
import { CategoryRepository } from '../categories/category.repository';
import { User } from '../auth/user.entity';

@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(PostsRepository)
        private postsRepository: PostsRepository,
        @InjectRepository(CategoryRepository)
        private categoryRepository: CategoryRepository,
    ) {}

    async getPosts(): Promise<Posts[]> {
        return this.postsRepository.getPosts();
    }

    async createPost(postDto: PostDto, user: User): Promise<Posts> {
        const category = await this.categoryRepository.findOne(postDto.categoryId);

        return this.postsRepository.createPost(postDto, category, user);
    }

    async getPostById(id: number): Promise<Posts> {
        const post = await this.postsRepository.findOne(id);

        if(!post) {
            throw new NotFoundException(`Post with id ${id} not found`);
        }

        return post;
    }

    async getPostBySlug(slug: string): Promise<Posts> {
        const post = await this.postsRepository.findOne({where: {slug: slug}});

        if(!post) {
            throw new NotFoundException(`Post not found`);
        }

        return post;
    }

    async updatePost(id: number, postDto: PostDto, user: User): Promise<Posts> {
        const category = await this.categoryRepository.findOne(postDto.categoryId);

        return this.postsRepository.updatePost(id, postDto, category, user);
    }

    async deletePost(id: number, user: User): Promise<void> {
        const result = await this.postsRepository.delete({id:id, userId: user.id});

        if(result.affected === 0) {
            throw new NotFoundException(`Post with id ${id} not found`);
        }
    }
}
