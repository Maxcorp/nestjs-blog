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

import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Posts } from './posts.entity';

@Controller('posts')
export class PostsController {

    constructor(private postsService: PostsService) {}

    @Get()
    getPosts() {
        return this.postsService.getPosts();
    }

    @Post()
    createPost(@Body() createPostDto: CreatePostDto): Promise<Posts> {
       return this.postsService.createPost(createPostDto);
    }

    @Get('/:id')
    getPostById(@Param('id', ParseIntPipe) id: number): Promise<Posts> {
        return this.postsService.getPostById(id);
    }

    @Get('/:slug/slug')
    getPostBySlug(@Param('slug') slug: string): Promise<Posts> {
        return this.postsService.getPostBySlug(slug);
    }

    @Patch('/:id')
    updatePost(@Param('id', ParseIntPipe) id: number, @Body() createPostDto: CreatePostDto): Promise<Posts> {
        return this.postsService.updatePost(id, createPostDto);
    }

    @Delete('/:id')
    deletePost(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.postsService.deletePost(id);
    }
}
