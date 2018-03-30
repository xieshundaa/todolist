import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/todo/all',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: TodoComponent
  },
  // {
  //   path: 'todo',
  //   redirectTo: 'todo/all',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
