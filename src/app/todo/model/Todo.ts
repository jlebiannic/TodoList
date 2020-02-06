export class Todo {


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