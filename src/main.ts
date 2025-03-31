import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule,
    new FastifyAdapter(),
  );


  const port = process.env.PORT || 3334;
  await app.listen(port, '0.0.0.0');
  console.log(` Core Service is running on Fastify! Port: ${port}`);
}
bootstrap();
