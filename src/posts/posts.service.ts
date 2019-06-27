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

@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(PostsRepository)
        private postsRepository: PostsRepository,
    ) {}

    async getPosts(): Promise<Posts[]> {
        return this.postsRepository.getPosts();
    }

    async createPost(postDto: PostDto): Promise<Posts> {
        return this.postsRepository.createPost(postDto);
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

    async updatePost(id: number, postDto: PostDto): Promise<Posts> {
        return this.postsRepository.updatePost(id, postDto);
    }

    async deletePost(id: number): Promise<void> {
        const result = await this.postsRepository.delete({id});

        if(result.affected === 0) {
            throw new NotFoundException(`Post with id ${id} not found`);
        }
    }
}
