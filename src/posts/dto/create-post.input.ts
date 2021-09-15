import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
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
