import { Injectable, NotFoundException } from '@nestjs/common';
import { CommentDto } from './dto/comment.dto';
import { CommentRepository } from './comment.repository';
import { PostsRepository } from '../posts/posts.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { User } from 'src/auth/user.entity';

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(CommentRepository)
        private commentRepository: CommentRepository,
        @InjectRepository(PostsRepository)
        private postsRepository: PostsRepository,
      ) {}
    
    async createComment(commentDto: CommentDto, user: User): Promise<Comment> {
        const post = await this.postsRepository.findOne(commentDto.postId);

        return await this.commentRepository.createComments(commentDto, user, post);
    }
}