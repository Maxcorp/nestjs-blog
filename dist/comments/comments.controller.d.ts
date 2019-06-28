import { CommentsService } from './comments.service';
import { CommentDto } from './dto/comment.dto';
import { Comment } from './comment.entity';
import { User } from 'src/auth/user.entity';
export declare class CommentsController {
    private commentsService;
    private logger;
    constructor(commentsService: CommentsService);
    createComment(commentDto: CommentDto, user: User): Promise<Comment>;
}
