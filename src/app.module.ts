import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { ActivitiesModule } from './activities/activities.module';
import { PublicContentsModule } from './public-contents/public-contents.module';

@Module({
  imports: [ProductsModule, AuthModule, UsersModule, OrdersModule, ActivitiesModule, PublicContentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
