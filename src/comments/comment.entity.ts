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

    @CreateDateColumn()
    created: Date;
  
    @UpdateDateColumn()
    updated: Date;
  }
  