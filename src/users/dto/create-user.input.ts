import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;
  @Field()
  secondName: string;
  @Field()
  email: string;
  @Field()
  password: string;
}
