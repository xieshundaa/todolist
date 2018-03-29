import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { TodoService } from '../core/todo.service';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TodoRoutingModule
  ],
  declarations: [
    TodoComponent,
    HeaderComponent,
    FooterComponent,
    TodoListComponent
  ],
  providers: [TodoService]
})
export class TodoModule { }
