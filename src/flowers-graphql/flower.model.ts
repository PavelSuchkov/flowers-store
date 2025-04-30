import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FlowerModel {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  color: string;

  @Field(() => Int)
  price: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
