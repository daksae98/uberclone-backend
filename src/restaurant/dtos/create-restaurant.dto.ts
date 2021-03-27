import { ArgsType, Field } from '@nestjs/graphql';
import { IsBoolean, IsString, Length, max } from 'class-validator';

@ArgsType()
export class CreateRestaurantDTO {
  @Field(() => String)
  @IsString()
  @Length(5, 10)
  name: string;

  @IsBoolean()
  @Field(() => Boolean)
  isVegan: boolean;

  @IsString()
  @Field(() => String)
  owner: string;

  @IsString()
  @Field(() => String)
  address: string;
}
