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
  
  @Entity()
  export class Comment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    body: string;

    // @Column()
    // postId: number;

    // @Column()
    // userId: number;

    @CreateDateColumn()
    created: Date;
  
    @UpdateDateColumn()
    updated: Date;
  }
  