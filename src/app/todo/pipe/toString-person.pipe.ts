import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../model/Person';

@Pipe({name: 'toStringPerson'})
export class ToStringPersonPipe implements PipeTransform {
  transform(persons: Person[]): string {
    return persons.map(p => p.name).join(", ");
  }
}