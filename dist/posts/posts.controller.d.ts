import { PostsService } from './posts.service';
import { PostDto } from './dto/post.dto';
import { Posts } from './posts.entity';
import { User } from '../auth/user.entity';
export declare class PostsController {
    private postsService;
    private logger;
    constructor(postsService: PostsService);
    getPosts(): Promise<Posts[]>;
    createPost(postDto: PostDto, user: User): Promise<Posts>;
    getPostById(id: number): Promise<Posts>;
    getPostBySlug(slug: string): Promise<Posts>;
    updatePost(id: number, postDto: PostDto, user: User): Promise<Posts>;
    deletePost(id: number, user: User): Promise<void>;
}
