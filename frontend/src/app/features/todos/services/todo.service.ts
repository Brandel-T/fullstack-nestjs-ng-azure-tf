import { computed, effect, Injectable, signal } from "@angular/core";
import { Todo } from "../../../models/todo.model";

@Injectable({ providedIn: 'root' })
export class TodoService {
  private todos = signal<Todo[]>([{
    done: false,
    name: "test",
    description: "dknfdhgp",
    id: 1,
    subTasks: [],
  }])

  getTodoList = computed(() => this.todos())
  todoList = signal<Todo[]>([])

  getLatestId = computed(() => {
    return this.todos().length > 0
      ? Math.max(...this.todos()
        .map(todo => todo.id!)
        .filter(id => id !== undefined))
      : 0;
  })

  constructor() {
    effect(() => {
      this.todoList.update((todos) => [...this.todos(), ...todos])
    })
  }

  addTodo(newTodo: Todo) {
    this.todos.update((todos) => [...todos, newTodo])
  }

  getTodoById(id: number): Todo {
    const todoIndex = this.todos().findIndex((todo) => todo.id == id)
    return this.todos()[todoIndex]
  }

  deleteTodo(id: number) {
    this.todos.update((todos) => todos.filter((todo) => todo.id != id))
  }

  updateTodo(id: number, updatedTodo: Todo) {
    this.todos.update((todos) => todos.map((todo) => todo.id === id ? updatedTodo : todo));
  }
}
