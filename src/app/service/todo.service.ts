import { Injectable } from '@angular/core';
import { Todo } from '../todo/model/Todo';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { TODOS } from '../todo/mock/todos.mock';
import * as _ from 'lodash'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // Un sujet est un observable++, c'est à dire qu'il permets de notifier des données 
  // à tous les abonnés 
  // Le BehaviorSubject permets à l'abonné de récupérer 
  // les dernières valeurs notifiées lorsqu'il s'abonne 
  // Le sujet est gardé en privé afin d'empêcher un consommateur du service 
  // d'émettre lui même des données 
  private todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  private todos: Todo[] = TODOS;

  private id: number;

  constructor() {
    this.id = TODOS.length;
    this.notifyTodos();
  }

  public notifyTodos(): void {
    // Le next permets d'émettre des données 
    this.todos$.next(this.todos);
  }


  public getTodos(): Observable<Todo[]> {
    //return of(this.todos);
    return this.todos$.asObservable()
  }

  public addTodo(name: string, date?: Date): Observable<void> {
    this.id++;
    this.todos.push(new Todo(this.id, name, false, date ? date : this.getDateDuJour()))
    // Lorsqu'on ajoute un Todo, on notifie les abonnés avec la nouvelle liste à jour 
    this.notifyTodos();
    return of();
  }

  public removeTodo(todo: Todo): Observable<void> {
    // const idx = this.todos.indexOf(todo);
    // this.todos.splice(idx, 1);
    _.remove(this.todos, t => t == todo);
    this.notifyTodos();
    return of();
  }

  public updateTodo(todo: Todo): Observable<void> {
    const idx = this.todos.indexOf(todo);
    const t = this.todos[idx];
    t.isDone = !t.isDone;
    this.notifyTodos();
    return of();
  }

  updateTodoName(id: number, newName: string): Observable<void>  {
    this.getTodo(id).subscribe(todo => {
      if(todo){
        todo.name = newName;
      } else {
        console.error("todo non trouvé: " + id);
      }

    });
    return of();
  }

  getTodo(id: number): Observable<Todo> {
    return of(this.todos.find(todo => todo.id === id));
  }
  getDateDuJour(): Date {
    return new Date();
  }
}
