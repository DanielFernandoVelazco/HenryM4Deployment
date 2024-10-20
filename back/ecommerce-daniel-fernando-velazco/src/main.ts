import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { globalLogger } from './middleware/logger/logger.middleware';
import { CategoriesSeed } from './seeds/categories/categories.seeds';
import { ProductsSeed } from './seeds/products/products.seeds';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalLogger);

  const categoriesSeed = app.get(CategoriesSeed);
  await categoriesSeed.seed();
  console.log('*** LA INSERCION DE CATEGORIAS FUE EXITOSA ***');

  const productsSeed = app.get(ProductsSeed);
  await productsSeed.seed();
  console.log('*** LA INSERCION DE PRODUCTOS FUE EXITOSA ***');

  await app.listen(3000);
}
bootstrap();
