import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { AccueilDemoComponent } from './accueil/accueil-demo/accueil-demo.component';
import { TodoComponent } from './todo/todo/todo.component';


const routes: Routes = [
{ path: 'Accueil', component:  AccueilDemoComponent},
{ path: 'TodoList', component: TodoListComponent },
{ path: 'Todo/:id', component: TodoComponent },
{ path: '**', redirectTo: 'TodoList' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
