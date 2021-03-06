import { Repository, EntityRepository } from 'typeorm';
import { Comment } from './comment.entity';
import { CommentDto } from './dto/comment.dto';
import {
  Logger,
  InternalServerErrorException,
  HttpException,
  NotFoundException,
} from '@nestjs/common';
import { User } from '../auth/user.entity';
import { Posts } from '../posts/posts.entity';

@EntityRepository(Comment)
export class CommentRepository extends Repository<Comment> {
  private logger = new Logger('CategoryRepository');

  async getComments(): Promise<Comment[]> {
    const comments = await Comment.find({});

    return comments;
  }

  async createComments(commentDto: CommentDto, user: User, post: Posts): Promise<Comment> {
    const { body } = commentDto;

    const comment = new Comment();
    comment.body = body;
    comment.user = user;
    comment.post = post;

    try {
      await comment.save();
      delete comment.user;
    } catch (error) {
      throw new InternalServerErrorException();
    }

    return comment;
  }
}
