import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserType } from './dto/UserType';
import { UserInput } from './input/user.inputs';
import { UsersService } from './users.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [UserType])
  async users() {
    return this.userService.findAll();
  }

  @Query(() => [UserType])
  async ranking() {
    return this.userService.findAllSorting();
  }

  @Mutation(() => UserType)
  async createUser(@Args('input') input: UserInput) {
    return this.userService.create(input);
  }

  @Mutation(() => UserType)
  async updateUser(@Args('id') id: string, @Args('input') input: UserInput) {
    return this.userService.update(id, input);
  }
}
