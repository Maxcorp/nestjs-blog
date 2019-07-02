import { BaseEntity } from 'typeorm';
import { User } from '../auth/user.entity';
import { Posts } from '../posts/posts.entity';
export declare class Comment extends BaseEntity {
    id: number;
    body: string;
    user: User;
    post: Posts;
    created: Date;
    updated: Date;
}
