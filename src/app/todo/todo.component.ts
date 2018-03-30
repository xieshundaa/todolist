import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from '../core/todo.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  desc = '';
  val: String = '';
  constructor(
              private todoService: TodoService,
              private activatedRoute: ActivatedRoute,
              private router: Router
            ) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      const filter = params['filter'];
      console.log(filter);
      switch (filter) {
        case 'active': return this.todoService.activeTodo(false).subscribe(res => this.todos = res);
        case 'completed': return this.todoService.activeTodo(true).subscribe(res => this.todos = res);
        default: this.getTodos();
      }
    });
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
