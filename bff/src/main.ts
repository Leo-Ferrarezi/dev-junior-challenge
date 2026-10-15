import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Validate } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())

  
  await app.listen(process.env.PORT ?? 3000);
  console.log("Rodouuu o servidooooor 😊 ")
}


void bootstrap();
