import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { Category } from '../categories/category.entity';
import { User } from '../auth/user.entity';
import { Comment } from '../comments/comment.entity';

@Entity()
export class Posts extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text', { nullable: true })
  slug: string;

  @Column()
  body: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @ManyToOne(type => Category, category => category.posts, {eager: true})
  category: Category;
  
  @Column()
  categoryId: number;

  // @Column()
  // userId: number;
  @OneToMany(type => Comment, comment => comment.post, {eager: false})
  comments: Comment[];

  @ManyToOne(type => User, user => user.posts, {eager: true})
  user: User;
}
