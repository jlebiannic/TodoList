import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/Todo';
import { TodoService } from 'src/app/service/todo.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/shared/menu/menu.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos$: Observable<Todo[]>;

  // @Output() public sortie = new EventEmitter<string>();

  constructor(private service: TodoService, private router : Router, private menuService: MenuService) {
    // this.sortie.emit("test")

  }

  ngOnInit() {
    this.todos$ = this.service.getTodos();
  }

  public update(todo : Todo) {
    this.service.updateTodoState(todo).subscribe();
  }

  public remove(todo : Todo) {
    this.service.removeTodo(todo).subscribe();
  }

  public updateTodo(todo : Todo) {
    // this.router.navigate(['/Todo', todo.id]);
    this.menuService.navigate(['/Todo', todo.id]);
  }

  public ajouterTodo(){
    this.menuService.navigate(['/Todo']);
  }

  public accueil(){
    this.menuService.navigate(['/Accueil']);
  }

}
