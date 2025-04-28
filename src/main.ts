import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 4200);
  console.log('HTTP app is listening on port 4200');

  const microserviceApp = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 8877,
    },
  });

  await microserviceApp.listen();
  console.log('Microservice is listening on port 8877');
}

bootstrap();
