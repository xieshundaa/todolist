import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo/todo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() todos: Todo[];
  constructor() { }

  ngOnInit() {
  }

}
