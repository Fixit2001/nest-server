import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  _id?: string;
  @Field()
  name: string;
  @Field()
  secondName: string;
  @Field()
  email: string;
  @Field()
  password: string;
}
