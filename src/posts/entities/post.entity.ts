import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field()
  _id?: string;
  @Field()
  title: string;
  @Field()
  category: string;
  @Field()
  tags: string;
  @Field()
  date: string;
  @Field()
  description: string;
}
