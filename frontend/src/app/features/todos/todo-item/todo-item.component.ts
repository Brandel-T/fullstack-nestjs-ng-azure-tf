import { Component, ChangeDetectionStrategy, input, inject } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Todo } from '../../../models/todo.model';
import { RouterModule } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  standalone: true,
  imports: [
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomComponentComponent {
  todo = input.required<Todo>()

  todoService = inject(TodoService)

  onDeleteTodo() {
    if (this.todo().id) {
      this.todoService.deleteTodo(this.todo().id!)
    }
  }
}
