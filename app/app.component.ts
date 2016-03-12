import {Component} from 'angular2/core';
import {TodoListItem} from './todos/todo-list-item';
import {TodoList} from './todos/todo-list';
import {StatusSelector} from './todos/status-selector';


@Component({
    selector: 'my-app',
    directives: [TodoListItem, TodoList, StatusSelector],
    template: `
    <h1>My First Angular 2 App</h1>
    <ul>
        <todo-list-item></todo-list-item>
    </ul>
    
    <status-selector (select)="status = $event"></status-selector>
    
    <todo-list [status]="status"></todo-list>`
})
export class AppComponent { }