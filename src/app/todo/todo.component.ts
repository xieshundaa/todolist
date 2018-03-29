import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from '../core/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  desc = '';
  val: String = '';
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodo().subscribe(res => this.todos = res);
  }
  addTodo(obj: Object) {
    const todo  = {
      desc: this.desc,
      completed: false
    };
    this.todoService.addTodo(todo).subscribe(res => this.getTodos());
  }

  searchTodo() {
    const todoId: string = this.desc;
    this.todoService.searchTodo(todoId).subscribe((res) => {
      this.todos = res;
    } );
  }

  childText(val) {
    this.desc = val;
    this.addTodo(val);
  }
}
