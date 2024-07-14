/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersModule } from './Users/Users.module';
import { AuthsModule } from './Auth/Auth.module';
import { ProductsModule } from './Products/Products.module';

@Module({
  imports: [AuthsModule, ProductsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
