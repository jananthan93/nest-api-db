import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import config from './db/config';

@Module({
  imports: [config,UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
