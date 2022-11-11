import { Entity, Column } from 'typeorm';
import { Directive, ObjectType, Field, Int } from '@nestjs/graphql';
import { AuthorI, BaseModel } from '@nest-mono-nx/common';

@ObjectType()
@Directive('@key(fields: "id")')
@Entity()
export class Author extends BaseModel implements AuthorI {
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => Int)
  @Column()
  age: number;
}
