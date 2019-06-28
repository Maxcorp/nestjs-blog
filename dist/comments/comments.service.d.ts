import { CommentDto } from './dto/comment.dto';
import { CommentRepository } from './comment.repository';
import { PostsRepository } from '../posts/posts.repository';
import { Comment } from './comment.entity';
import { User } from 'src/auth/user.entity';
export declare class CommentsService {
    private commentRepository;
    private postsRepository;
    constructor(commentRepository: CommentRepository, postsRepository: PostsRepository);
    createComment(commentDto: CommentDto, user: User): Promise<Comment>;
}
