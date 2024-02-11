import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerTheme, SwaggerThemeName } from 'swagger-themes';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  const PORT = config.get('PORT');
  const SWAGGER_THEME: SwaggerThemeName = config.get('SWAGGER_THEME');

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Swagger Themes Example API')
    .setDescription('API "Swagger Themes"')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);
  const swaggerTheme = new SwaggerTheme('v3');

  SwaggerModule.setup('/api/docs', app, swaggerDocument, {
    explorer: true,
    customCss: swaggerTheme.getBuffer(SWAGGER_THEME),
  });

  await app.listen(PORT, () => {
    console.log(`Docs URL: http://127.0.0.1:${PORT}/api/docs`)
    console.log(`Listening port: ${PORT}`)
  });
}
bootstrap();
