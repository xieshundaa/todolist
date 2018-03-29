import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../../core/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  editTodo(todo) {
    const NewTodo = Object.assign({}, todo, {completed: !todo.completed});
    const todoId = NewTodo.id;
     this.todoService.editTodo(todoId, NewTodo).subscribe(
      res => {
        return NewTodo;
    },
    error => {
        console.log('错误原因:' + error.statusText + error.status);
    }
     );
    }
    removeTodo(todo: Todo) {
      // const index = this.todos.indexOf(todo);
      // for (let i = 0; i < this.todos.length; i++) {
      //   if (todo.id === this.todos[i].id) {
      //     this.todos.splice(index, 1);
      //   }
      // }
      this.todoService.removeTodo(todo.id).subscribe(res => this.todos = res);
    }
}
