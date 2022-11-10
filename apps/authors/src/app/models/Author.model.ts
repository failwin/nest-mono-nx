import { Entity, Column } from 'typeorm';
import { AuthorI, BaseModel } from '@nest-mono-nx/common';

@Entity()
export class Author extends BaseModel implements AuthorI {
  @Column()
  name: string;

  @Column()
  age: number;
}
