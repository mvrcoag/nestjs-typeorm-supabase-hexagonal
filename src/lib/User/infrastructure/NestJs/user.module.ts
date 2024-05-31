import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserGetAll } from '../../application/UserGetAll/UserGetAll';
import { TypeOrmUserRepository } from '../TypeOrm/TypeOrmUserRepository';
import { UserGetOneById } from '../../application/UserGetOneById/UserGetOneById';
import { UserCreate } from '../../application/UserCreate/UserCreate';
import { UserEdit } from '../../application/UserEdit/UserEdit';
import { UserDelete } from '../../application/UserDelete/UserDelete';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmUserEntity } from '../TypeOrm/TypeOrmUserEntity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeOrmUserEntity])],
  controllers: [UserController],
  providers: [
    {
      provide: 'UserRepository',
      useClass: TypeOrmUserRepository,
    },
    {
      provide: 'UserGetAll',
      useFactory: (repository: TypeOrmUserRepository) =>
        new UserGetAll(repository),
      inject: ['UserRepository'],
    },
    {
      provide: 'UserGetOneById',
      useFactory: (repository: TypeOrmUserRepository) =>
        new UserGetOneById(repository),
      inject: ['UserRepository'],
    },
    {
      provide: 'UserCreate',
      useFactory: (repository: TypeOrmUserRepository) =>
        new UserCreate(repository),
      inject: ['UserRepository'],
    },
    {
      provide: 'UserEdit',
      useFactory: (repository: TypeOrmUserRepository) =>
        new UserEdit(repository),
      inject: ['UserRepository'],
    },
    {
      provide: 'UserDelete',
      useFactory: (repository: TypeOrmUserRepository) =>
        new UserDelete(repository),
      inject: ['UserRepository'],
    },
  ],
})
export class UserModule {}
