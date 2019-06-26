import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor(private postsService: PostsService) {}

    @Get()
    getPosts() {
        this.postsService.getPosts();
    }

    @Post()
    createPost() {
        this.postsService.createPost();
    }

    @Get('/:id')
    getPostById() {
        this.postsService.getPostById();
    }

    @Patch('/:id')
    updatePost() {
        this.postsService.updatePost();
    }

    @Delete('/:id')
    deletePost() {
        this.postsService.deletePost();
    }
}
