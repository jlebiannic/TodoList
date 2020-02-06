import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToStringPersonPipe } from './pipe/toString-person.pipe';



@NgModule({
  declarations: [TodoListComponent, TodoComponent, ToStringPersonPipe],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [TodoListComponent]
})
export class TodoModule { }
