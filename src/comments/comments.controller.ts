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

@Controller('comments')
export class CommentsController {
    
    private logger = new Logger('CommentsController');

    constructor(private commentsService: CommentsService) {}

    @Post()
    createComment(@Body() commentDto: CommentDto) {
        return this.commentsService.createComment(commentDto);
    }
}
