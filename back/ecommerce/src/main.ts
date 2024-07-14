import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loogerGlobal } from './Middlewares/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(loogerGlobal);
  await app.listen(3000);
}
bootstrap();
