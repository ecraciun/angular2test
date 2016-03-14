import {Component} from 'angular2/core';
import {TodoListItem} from './todos/todo/components/todo-list-item';
import {TodoList} from './todos/todo/components/todo-list';
import {StatusSelector} from './todos/todo/components/status-selector';
import {SearchBox} from './todos/search/components/search-box';
import {HeroesComponent} from './heroes/components/heroes.component';


@Component({
    selector: 'my-app',
    directives: [TodoListItem, TodoList, StatusSelector, SearchBox, HeroesComponent],
    templateUrl: '/app/app.component.html'
})
export class AppComponent { 
}