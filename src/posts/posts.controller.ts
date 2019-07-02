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
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  Res,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import {
  FileInterceptor,
  FileFieldsInterceptor,
} from '@nestjs/platform-express';
import {
  ApiUseTags,
  ApiBearerAuth,
  ApiConsumes,
  ApiImplicitFile,
} from '@nestjs/swagger';
import { diskStorage, path } from 'multer';
import { extname } from 'path';

import { PostsService } from './posts.service';
import { PostDto } from './dto/post.dto';
import { Posts } from './posts.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from '../auth/user.entity';

@ApiUseTags('posts')
@Controller('posts')
export class PostsController {
  private logger = new Logger('PostsController');

  constructor(private postsService: PostsService) {}

  @Get()
  getPosts() {
    return this.postsService.getPosts();
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @UseInterceptors(
    FileInterceptor('img', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          let ext = extname(file.originalname);
          if (
            ext !== '.jpg' &&
            ext !== '.png' &&
            ext !== '.jpeg'
          ) {
            return cb(
              new HttpException('Only images are allowed!', HttpStatus.BAD_REQUEST, ),
              null,
            );
          }
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
        limits: { fileSize: 1024 * 1024 },
      }),
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiImplicitFile({ name: 'img' })
  createPost(
    @Body() postDto: PostDto,
    @GetUser() user: User,
    @UploadedFile() img,
  ): Promise<Posts> {
    return this.postsService.createPost(postDto, user, img);
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
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() postDto: PostDto,
    @GetUser() user: User,
  ): Promise<Posts> {
    return this.postsService.updatePost(id, postDto, user);
  }

  @Delete('/:id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  deletePost(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<void> {
    return this.postsService.deletePost(id, user);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          if (extname(file.originalname) !== '.jpg') {
            return cb(new Error('Only pdfs are allowed'));
          }

          // Generating a 32 random chars long string
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          //Calling the callback passing the random name generated with the original extension name
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() avatar) {
    console.log(avatar);
  }
}
