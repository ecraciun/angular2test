import {Component, Inject} from 'angular2/core';
import {TodoService}  from './todo-service'
import {TodoItemRenderer} from './todo-item-renderer';
import {SearchPipe} from './search-pipe';


@Component({
    selector: 'todo-list',
    directives: [TodoItemRenderer],
    pipes: [SearchPipe],
    template: `
    <ul>
        <li *ngFor="#todo of todoService.todos | search">
            <todo-item-renderer [todo]="todo"></todo-item-renderer>
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