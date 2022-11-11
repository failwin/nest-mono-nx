import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Directive, ObjectType, Field, ID } from '@nestjs/graphql';

export interface BaseModelI {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthorI extends BaseModelI {
  name: string;
  age: number;
}

@ObjectType()
@Directive('@key(fields: "id")')
@Entity()
export class BaseModel implements BaseModelI {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date;
}
