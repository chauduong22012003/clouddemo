import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors({
    origin: 'https://phattien.uc.r.appspot.com/', // Set the origin of your frontend application
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true,
  }));

  await app.listen(3000);
}
bootstrap();