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
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodo().subscribe(res => this.todos = res);
  }
  addTodo(obj: Object) {
    // this.todos.push({id: 1, desc: this.descr, selected: false});
    // this.descr = '';
    const todo  = {
      desc: this.desc,
      completed: false
    };
    this.todoService.addTodo(todo).subscribe(res => this.getTodos());
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
  searchTodo() {
    const todoId: string = this.desc;
    this.todoService.searchTodo(todoId).subscribe((res) => {
      this.todos = res;
    } );
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
}
