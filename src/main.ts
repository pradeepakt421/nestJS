import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  
  app.useGlobalPipes(
  new ValidationPipe({
      transform: true,  // if data is "25"-> 25
      whitelist: true, // if user passing extra fields it will ignore and remove
      forbidNonWhitelisted: true, //if user passing extra fields it will not ignore and remove it throws error
   })
);

await app.listen(3000);
}
bootstrap();
