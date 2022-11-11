import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { Author } from './models';
import { AppService } from './app.service';
import { AuthorCreateDto } from './dto';

@Resolver((of) => Author)
export class AppResolver {
  constructor(private appService: AppService) {}

  @Query(() => [Author])
  authors(): Promise<Author[]> {
    return this.appService.getList();
  }

  @Query(() => Author)
  author(@Args('id') id: number): Promise<Author> {
    return this.appService.getOne(id);
  }


  @Mutation(returns => Author, { nullable: true })
  async createAuthor(@Args('authorCreateDto') authorCreateDto: AuthorCreateDto,) {
    return this.appService.create(authorCreateDto);
  }

}
