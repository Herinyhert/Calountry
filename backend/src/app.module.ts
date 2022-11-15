import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  //TODO: Import TypeOrmModule with environment variables
  imports: [ConfigModule.forRoot(), AuthModule],
})
export class AppModule {}
