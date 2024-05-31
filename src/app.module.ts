import { Module } from '@nestjs/common';
import { UserModule } from './lib/User/infrastructure/NestJs/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmUserEntity } from './lib/User/infrastructure/TypeOrm/TypeOrmUserEntity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [TypeOrmUserEntity],
      synchronize: process.env.NODE_ENV === 'dev',
    }),
    UserModule,
  ],
})
export class AppModule {}
