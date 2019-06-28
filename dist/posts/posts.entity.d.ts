import { BaseEntity } from 'typeorm';
import { Category } from '../categories/category.entity';
import { User } from '../auth/user.entity';
import { Comment } from '../comments/comment.entity';
export declare class Posts extends BaseEntity {
    id: number;
    name: string;
    slug: string;
    body: string;
    created: Date;
    updated: Date;
    category: Category;
    categoryId: number;
    comments: Comment[];
    user: User;
    userId: number;
}
