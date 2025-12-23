import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Client } from 'pg';

async function createSchemas() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL?.includes('localhost') ? false : { rejectUnauthorized: false },
  });

  try {
    await client.connect();
    await client.query('CREATE SCHEMA IF NOT EXISTS it1');
    await client.query('CREATE SCHEMA IF NOT EXISTS it2');
    await client.query('CREATE SCHEMA IF NOT EXISTS it3');
    console.log('Schemas created successfully');
  } catch (error) {
    console.error('Error creating schemas:', error);
  } finally {
    await client.end();
  }
}

async function bootstrap() {
  await createSchemas();
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'https://prueba-render-frontend-1.onrender.com',
      'http://localhost:3000',
      'http://localhost:3001',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
