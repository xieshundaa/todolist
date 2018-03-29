import { Component, OnInit, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() childText = new EventEmitter<string>();
  inputValue: String = '';
  constructor() {

  }

  ngOnInit() {
  }
  addTodo(valText) {
    this.childText.emit(valText.target.value);
    // this.inputValue = valText.target.value;
    // console.log(valtext)
  }
}
