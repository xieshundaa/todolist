import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Todo } from '../todo/todo';
import { TodoService } from '../core/todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {
  @Input() todos: Todo[];
  private newTodos: Todo[] = [];
  constructor(private todoService: TodoService) { }

  ngOnInit() {

  }
  ngAfterViewInit() {

  }
}
