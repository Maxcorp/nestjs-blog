import { BaseEntity } from 'typeorm';
import { Posts } from '../posts/posts.entity';
import { Comment } from '../comments/comment.entity';
export declare class User extends BaseEntity {
    id: number;
    username: string;
    password: string;
    salt: string;
    comments: Comment[];
    posts: Posts[];
    validatePassword(password: string): Promise<boolean>;
}
