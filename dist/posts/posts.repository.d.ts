import { Repository } from 'typeorm';
import { Posts } from './posts.entity';
import { PostDto } from './dto/post.dto';
import { Category } from '../categories/category.entity';
import { User } from '../auth/user.entity';
export declare class PostsRepository extends Repository<Posts> {
    getPosts(): Promise<Posts[]>;
    createPost(postDto: PostDto, category: Category, user: User): Promise<Posts>;
    updatePost(id: any, postDto: PostDto, category: Category, user: User): Promise<Posts>;
}
