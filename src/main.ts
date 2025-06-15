import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 3000);

  console.log(`Server is running on port ${process.env.PORT ?? 3000}`);
}

bootstrap().catch((err) => {
  console.error('Error starting the application:', err);
  process.exit(1); 
});
