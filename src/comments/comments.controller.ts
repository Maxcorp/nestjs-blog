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

import { CommentsService } from './comments.service';
import { CommentDto } from './dto/comment.dto';
import { Comment } from './comment.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiUseTags('comments')
@ApiBearerAuth()
@Controller('comments')
@UseGuards(AuthGuard())
export class CommentsController {
  private logger = new Logger('CommentsController');

  constructor(private commentsService: CommentsService) {}

  @Post()
  createComment(@Body() commentDto: CommentDto, @GetUser() user: User) {
    return this.commentsService.createComment(commentDto, user);
  }
}
