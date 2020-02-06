import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from '../model/Todo';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { PersonService } from 'src/app/service/person.service';
import { Person } from '../model/Person';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public registerForm: FormGroup;
  public todo: Todo;
  // private todo$: Observable<Todo>;
  
  public allPersons : Person[] = [];

  constructor(private serviceTodo: TodoService
    ,private servicePerson: PersonService
    , private formBuilder: FormBuilder
    , private router: Router
    , private route: ActivatedRoute) { }

  ngOnInit() {
    this.servicePerson.getPersons().pipe(
      switchMap(persons => {
        this.allPersons = persons;
        return this.route.paramMap;
      }),
      switchMap((params: ParamMap) =>
        this.serviceTodo.getTodo(Number.parseInt(params.get('id')))
      )
    ).subscribe((t: Todo) => {
      this.todo = t;
      this.registerForm = this.formBuilder.group({
        name: this.todo ? this.todo.name : "",
        persons: this.allPersons
      });
    });
    
    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.serviceTodo.getTodo(Number.parseInt(params.get('id')))
    //   )
    // ).subscribe((t: Todo) => {
    //   this.todo = t;
    //   this.registerForm = this.formBuilder.group({
    //     name: this.todo ? this.todo.name : ""
    //   });
    // });
  }

  public onSubmit(): void {
    // const name = this.registerForm.value.name;

    if (this.todo) {
      Object.assign(this.todo, this.registerForm.value);
      this.serviceTodo.updateTodoName(this.todo.id, this.todo.name);
    } else {
      this.serviceTodo.addTodo(this.registerForm.value.name);
    }
    this.router.navigate(['/TodoList']);
  }
}
