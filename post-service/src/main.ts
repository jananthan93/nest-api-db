import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

const logger = new Logger('main');
const microserviceOptions = {
  transport: Transport.TCP,
  options:{
    host: '127.0.0.1',
    port:8002
  }
}
async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule,microserviceOptions);
  await app.listen(() => {
    logger.log('Post service is listening...')
  });
}
bootstrap();
