import {Component} from 'angular2/core';
import {TodoListItem} from './todos/todo/components/todo-list-item';
import {TodoList} from './todos/todo/components/todo-list';
import {StatusSelector} from './todos/todo/components/status-selector';
import {SearchBox} from './todos/search/components/search-box';

@Component({
    selector: 'my-app',
    directives: [TodoListItem, TodoList, StatusSelector, SearchBox],
    template: `
    <h1>My First Angular 2 App</h1>
    
    <search-box (update)="term = $event"></search-box>
    
    <todo-list-item></todo-list-item>
    
    
    <status-selector (select)="status = $event"></status-selector>
    
    <todo-list [status]="status"
    [term]="term"></todo-list>`
})
export class AppComponent { }