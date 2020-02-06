import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from '../model/Todo';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public registerForm: FormGroup;
  public todo: Todo;
  // private todo$: Observable<Todo>;

  constructor(private service: TodoService
    , private formBuilder: FormBuilder
    , private router: Router
    , private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getTodo(Number.parseInt(params.get('id')))
      )
    ).subscribe((t: Todo) => {
      this.todo = t;
      this.registerForm = this.formBuilder.group({
        name: this.todo ? this.todo.name : ""
      });
    });
  }

  public onSubmit(): void {
    // const name = this.registerForm.value.name;

    if (this.todo) {
      Object.assign(this.todo, this.registerForm.value);
      this.service.updateTodoName(this.todo.id, this.todo.name);
    } else {
      this.service.addTodo(this.registerForm.value.name);
    }
    this.router.navigate(['/TodoList']);
  }
}
