import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './modules/todos/todos.module';
import { TodosService } from './modules/todos/todos.service';
import { TodosController } from './modules/todos/todos.controller';

@Module({
  imports: [TodosModule, TodosModule],
  controllers: [AppController, TodosController],
  providers: [AppService, TodosService],
})
export class AppModule {}
