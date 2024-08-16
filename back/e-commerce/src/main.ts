/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerGlobal } from './middleware/logger.middleware';
import 'reflect-metadata';
import { CategoriesSeed } from './seeds/categories/categories.seed';
import { ProductsSeed } from './seeds/products/products.seed';
import { ValidationPipe } from './pipes-validation/validation.pipe';
import { auth } from 'express-openid-connect';
import { auth0Config } from './config/auth0.config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(loggerGlobal);
  app.use(
    auth({
      ...auth0Config
    })
  );
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Nest Henry PT20a')
    .setDescription('API en nest')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document)
  const categoriesSeed = app.get(CategoriesSeed);
  await categoriesSeed.seed();
  console.log('La inserción de categorias fue exitosa');

  const productsSeed = app.get(ProductsSeed);
  await productsSeed.seed();
  console.log('La inserción de productos fue exitosa');

  await app.listen(3000);
}
bootstrap();
