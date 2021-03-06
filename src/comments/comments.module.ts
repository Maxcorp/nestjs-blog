import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { CommentRepository } from './comment.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { PostsRepository } from '../posts/posts.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CommentRepository, PostsRepository]), AuthModule],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
