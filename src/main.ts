import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove campos não definidos no DTO
      forbidNonWhitelisted: true, // Retorna erro para campos desconhecidos
      transform: true, // Converte tipos automaticamente
    }),
  );

  const PORT = process.env.PORT || 3333;
  await app.listen(PORT);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
}

bootstrap();
