import {Component} from 'angular2/core';
import {TodoListItem} from './todos/todo-list-item'
import {TodoList} from './todos/todo-list'

@Component({
    selector: 'my-app',
    directives: [TodoListItem, TodoList],
    template: `
    <h1>My First Angular 2 App</h1>
    <ul>
        <todo-list-item></todo-list-item>
    </ul>
    
    <todo-list></todo-list>`
})
export class AppComponent { }