import { Injectable } from '@nestjs/common';
import { ITodo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  private readonly todos: ITodo[] = [
    {
      id: '1',
      done: false,
      name: 'Todo item 1',
      description: 'Todo item 1 description',
      subTasks: [],
    },
    {
      id: '2',
      done: false,
      name: 'Todo item 2',
      description: 'Todo item 2 description',
      subTasks: [],
    },
  ];

  create(createTodoDto: CreateTodoDto) {
    return this.todos.push(createTodoDto);
  }

  findAll(): ITodo[] {
    return this.todos;
  }

  findById(id: string): ITodo {
    const todoIndex = this.todos.findIndex((todo) => todo.id == id);
    return this.todos[todoIndex];
  }

  deleteById(id: string) {
    this.todos.push(...this.todos.filter((todo) => todo.id !== id));
  }

  updateTodo(id: string, updatedTodoDto: UpdateTodoDto) {
    this.todos.forEach((todo, index) => {
      if (todo.id === id.toString()) {
        this.todos[index] = { ...todo, ...updatedTodoDto };
      }
    });
  }
}
