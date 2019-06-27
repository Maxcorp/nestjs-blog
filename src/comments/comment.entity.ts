import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
  } from 'typeorm';
import { User } from '../auth/user.entity';
import { Posts } from '../posts/posts.entity';
  
  @Entity()
  export class Comment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    body: string;

    @ManyToOne(type => User, user => user.comments, {eager: true})
    user: User;

    // @Column()
    // postId: number;

    // @Column()
    // userId: number;

    @ManyToOne(type => Posts, post => post.comments, {eager: true})
    post: Posts;

    @CreateDateColumn()
    created: Date;
  
    @UpdateDateColumn()
    updated: Date;
  }
  