import { Injectable, NotFoundException } from '@nestjs/common';
import { CommentDto } from './dto/comment.dto';
import { CommentRepository } from './comment.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './comment.entity';

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(CommentRepository)
        private commentRepository: CommentRepository,
      ) {}

    
    async createComment(commentDto: CommentDto): Promise<Comment> {
        console.log(commentDto);
        return await this.commentRepository.createComments(commentDto);
    }
}