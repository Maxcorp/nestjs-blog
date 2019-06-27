import { Repository, EntityRepository } from 'typeorm';
import { Comment } from './comment.entity';
import { CommentDto } from './dto/comment.dto';
import {
  Logger,
  InternalServerErrorException,
  HttpException,
  NotFoundException,
} from '@nestjs/common';

@EntityRepository(Comment)
export class CommentRepository extends Repository<Comment> {
  private logger = new Logger('CategoryRepository');

  async getComments(): Promise<Comment[]> {
    const comments = await Comment.find({});

    return comments;
  }

  async createComments(commentDto: CommentDto): Promise<Comment> {
    const { body } = commentDto;

    const comment = new Comment();
    comment.body = body;

    try {
      await comment.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }

    return comment;
  }
}
