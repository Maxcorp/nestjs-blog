import { PostsRepository } from './posts.repository';
import { PostDto } from './dto/post.dto';
import { Posts } from './posts.entity';
import { CategoryRepository } from '../categories/category.repository';
import { User } from '../auth/user.entity';
export declare class PostsService {
    private postsRepository;
    private categoryRepository;
    constructor(postsRepository: PostsRepository, categoryRepository: CategoryRepository);
    getPosts(): Promise<Posts[]>;
    createPost(postDto: PostDto, user: User): Promise<Posts>;
    getPostById(id: number): Promise<Posts>;
    getPostBySlug(slug: string): Promise<Posts>;
    updatePost(id: number, postDto: PostDto, user: User): Promise<Posts>;
    deletePost(id: number, user: User): Promise<void>;
}
