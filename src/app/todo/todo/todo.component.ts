import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  public allPersons: Person[] = [];

  constructor(private serviceTodo: TodoService
    , private servicePerson: PersonService
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
      this.todo = t || new Todo();
      this.registerForm = this.formBuilder.group({
        name: [this.todo ? this.todo.name : "", [Validators.required, Validators.minLength(2)]],
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

  // f rends accessible les contrôles du formulaire au template Html 
  public get f() {
    return this.registerForm.controls;
  }

  public affecter(event) {
    //console.log(this.registerForm.value.persons);
    event.preventDefault();
    const person : Person = this.registerForm.value.persons;
    this.affectPerson(person);
  }

  affectPerson(person: Person): void {
    if(this.todo.persons.indexOf(person) == -1){
      this.todo.persons.push(person);
    }
  }
  
  public onSubmit(): void {
    // const name = this.registerForm.value.name;
    if (this.registerForm.invalid) {
      return;
    }
    if (this.todo.id) {
      this.todo.name =  this.registerForm.value.name;
      this.serviceTodo.updateTodo({...this.todo});
    } else {
      this.serviceTodo.addTodo(this.registerForm.value.name);
    }
    this.router.navigate(['/TodoList']);
  }
}
