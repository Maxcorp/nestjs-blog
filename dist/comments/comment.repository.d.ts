import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { CommentDto } from './dto/comment.dto';
import { User } from '../auth/user.entity';
import { Posts } from '../posts/posts.entity';
export declare class CommentRepository extends Repository<Comment> {
    private logger;
    getComments(): Promise<Comment[]>;
    createComments(commentDto: CommentDto, user: User, post: Posts): Promise<Comment>;
}
