import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { User } from 'src/users/entities/user.entity';
import { Product } from 'src/products/entities/product.entity';
import { OrdersDetail } from 'src/order-details/entities/order-detail.entity';
import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from 'src/products/products.module';
import { OrderDetailsModule } from 'src/order-details/order-details.module';

@Module({
  imports: [TypeOrmModule.forFeature([
    Order,
    User,
    Product,
    OrdersDetail,
  ]),
    UsersModule,
    ProductsModule,
    OrderDetailsModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule { }
