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
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from '../auth/user.entity';

@Controller('posts')
export class PostsController {
  private logger = new Logger('PostsController');

  constructor(private postsService: PostsService) {}

  @Get()
  getPosts() {
    return this.postsService.getPosts();
  }

  @Post()
  @UseGuards(AuthGuard())
  createPost(@Body() postDto: PostDto, @GetUser() user: User): Promise<Posts> {
    return this.postsService.createPost(postDto, user);
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
  @UseGuards(AuthGuard())
  updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() postDto: PostDto,
    @GetUser() user: User,
  ): Promise<Posts> {
    return this.postsService.updatePost(id, postDto, user);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard())
  deletePost(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<void> {
    return this.postsService.deletePost(id, user);
  }
}
