import { Todo } from '../model/Todo';

export const TODOS: Todo[] = [
  { id: 1, name: "Faire les courses", creationTime: new Date(), persons: [] },
  { id: 2, name: "Tondre la pelouse", creationTime: new Date(), isDone: true, persons: [] },
  { id: 3, name: "Faire le ménage", creationTime: new Date(), persons: [] },
  { id: 4, name: "Couper du bois", creationTime: new Date(), persons: [] },
  { id: 5, name: "Peindre le portail", creationTime: new Date(), persons: [] }
];
