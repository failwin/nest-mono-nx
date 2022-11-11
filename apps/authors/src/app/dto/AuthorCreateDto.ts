import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class AuthorCreateDto {
  @Field()
  name: string;

  @Field(() => Int)
  age: number;
}
