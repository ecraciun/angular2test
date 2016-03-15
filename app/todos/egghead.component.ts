import {Component}              from 'angular2/core';
import {TodoListItem}           from './todo/components/todo-list-item';
import {TodoList}               from './todo/components/todo-list';
import {StatusSelector}         from './todo/components/status-selector';
import {SearchBox}              from './search/components/search-box';


@Component({
    selector: 'my-egghead',
    directives: [TodoListItem, TodoList, StatusSelector, SearchBox],
    templateUrl: '/app/todos/egghead.component.html'
})
export class EggheadComponent { 
}