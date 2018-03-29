import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Todo } from '../todo/todo';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {
  todos: Todo[] = [];
  private api_url = 'http://localhost:3000/data';
  private url = this.api_url + '/1';
  private headers = new HttpHeaders({'Content-type': 'application/jsn'});

  constructor(private http: HttpClient) { }
  addTodo(todo: Todo): Observable<Todo> {
    // const todo = {
    //   id: UUID.UUID(),
    //   desc: todoItem,
    //   selected: false
    // };
    return this.http.post<Todo>(this.api_url, todo);
    // this.todos.push(todo);
    // return this.todos;
  }
  getTodo(): Observable<Todo []> {
    return this.http.get<Todo []>(this.api_url);
  }
  searchTodo(todoId: string): Observable<Todo []> {
    return this.http.get<Todo []>(this.api_url + '?id=' + todoId);
  }
  removeTodo(todoId: string): Observable<Todo []> {
    return this.http.delete<Todo []>(this.api_url + '/' + todoId);
  }
  editTodo(todoId, todo: Todo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put<Todo>(this.api_url + '/' + todoId, todo, httpOptions);
  }
}
