import { BaseEntity } from 'typeorm';
import { Posts } from 'src/posts/posts.entity';
export declare class Category extends BaseEntity {
    id: number;
    name: string;
    slug: string;
    created: Date;
    updated: Date;
    posts: Posts[];
}
