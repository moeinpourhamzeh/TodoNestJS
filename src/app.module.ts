import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';


@Module({
  imports: [ 
    TypeOrmModule.forRoot({
    type: "sqlite",
    database: "database.sqlite",
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: true,
  }),
  TodoModule,],
})
export class AppModule {}
