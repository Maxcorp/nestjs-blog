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
import { PostDto } from './dto/post.dto';
import { Posts } from './posts.entity';

@Controller('posts')
export class PostsController {
    
    private logger = new Logger('PostsController');

    constructor(private postsService: PostsService) {}

    @Get()
    getPosts() {
        return this.postsService.getPosts();
    }

    @Post()
    createPost(@Body() postDto: PostDto): Promise<Posts> {
       return this.postsService.createPost(postDto);
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
    updatePost(@Param('id', ParseIntPipe) id: number, @Body() postDto: PostDto): Promise<Posts> {
        return this.postsService.updatePost(id, postDto);
    }

    @Delete('/:id')
    deletePost(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.postsService.deletePost(id);
    }
}
