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
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { PostRepository } from './post.repository';

import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(PostRepository)
        private postRepository: PostRepository,
    ) {}

    getPosts() {
        return this.postRepository.getPosts();
    }

    createPost() {
        return this.postRepository.createPost();
    }

    getPostById() {

    }

    updatePost() {

    }

    deletePost() {

    }
}
