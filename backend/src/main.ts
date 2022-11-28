import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SecuritySchemeObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
<<<<<<< HEAD
  app.enableCors();
=======
  const config = new DocumentBuilder()
    .setDescription('Calountry backend')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        schema: 'Bearer',
        bearerFormat: 'Token',
      } as SecuritySchemeObject,
      'Bearer',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
>>>>>>> 43339091d4b8c79a26c00f38fe0811e954c35748
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
