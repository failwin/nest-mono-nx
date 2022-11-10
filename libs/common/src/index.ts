import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export interface BaseModelI {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthorI extends BaseModelI {
  name: string;
  age: number;
}

@Entity()
export class BaseModel implements BaseModelI {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamptz' })
  createdAt: Date;

  @Column({ type: 'timestamptz' })
  updatedAt: Date;
}
