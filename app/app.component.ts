import {Component} from 'angular2/core';
import {TodoListItem} from './todos/todo/components/todo-list-item';
import {TodoList} from './todos/todo/components/todo-list';
import {StatusSelector} from './todos/todo/components/status-selector';
import {SearchBox} from './todos/search/components/search-box';

@Component({
    selector: 'my-app',
    directives: [TodoListItem, TodoList, StatusSelector, SearchBox],
    templateUrl: '/app/app.component.html'
})
export class AppComponent { }