import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { CategoriesModule } from './categories/categories.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { postgresDataSourceConfig } from './config/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedModule } from './seeds/seeds.module';
import { CloudinaryService } from './service/cloudinary/cloudinary.service';
import { FileUploadModule } from './file-upload/file-upload.module';
import { SharedModule } from './shared/shared.module';
import { sqliteDataSourceConfig } from 'test/typeorm-testing-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env'],
      isGlobal: true,
      load: [postgresDataSourceConfig, sqliteDataSourceConfig,
        () => ({
          enviroment: process.env.enviroment || 'TEST'
        })
      ],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (ConfigService: ConfigService) =>
        ConfigService.get('enviroment') === 'TEST'
          ? ConfigService.get('sqlite')
          : ConfigService.get('postgres'),
    }),
    ProductsModule,
    UsersModule,
    AuthModule,
    OrdersModule,
    OrderDetailsModule,
    CategoriesModule,
    SeedModule,
    FileUploadModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService, CloudinaryService],
})
export class AppModule { }
