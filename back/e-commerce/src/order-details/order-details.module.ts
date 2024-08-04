/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';
import { OrderDetailsController } from './order-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersDetail } from './entities/order-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrdersDetail])],
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService],
})
export class OrderDetailsModule { }
