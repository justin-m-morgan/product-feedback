import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetUserById {
  @Field((type) => Int)
  id: number;
}
