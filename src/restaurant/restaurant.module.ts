import { Module } from '@nestjs/common';
import { RestaurantResolver } from './retaurant.resolver';

@Module({
  providers: [RestaurantResolver],
})
export class RestaurantModule {}
