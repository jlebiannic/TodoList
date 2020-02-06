import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from '../todo/model/Person';
import { PERSONS } from '../todo/mock/persons.mock';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private person$: BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>([]);
  private persons: Person[] = PERSONS;
  private id: number;
  constructor() {
    this.id = PERSONS.length;
    this.notifyPersons();
  }

  public notifyPersons(): void {
    this.person$.next(this.persons);
  }

  public getPersons(): Observable<Person[]> {
    return this.person$.asObservable()
  }
}
