import {Component, Inject} from 'angular2/core';
import {TodoService}  from './todo-service'

@Component({
    selector: 'todo-list',
    template: `
    <ul>
        <li *ngFor="#todo of todoService.todos">
            {{todo.title}}
        </li>
    </ul>
    <div>{{todoService | json}}</div>
    `
})
export class TodoList { 
    constructor(public todoService: TodoService){
        console.log(todoService);
    }
}