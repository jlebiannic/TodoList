import { Person } from './Person';

export class Todo {

    public persons? : Person[] = [];

    constructor(
        public id: number,
        public name: string,
        public isDone?: boolean,
        public creationTime?: Date) {
        if (!this.creationTime) {
            this.creationTime = new Date()
        }
    }
}