import {Component}          from 'angular2/core';
import {TodoListItem}       from './todos/todo/components/todo-list-item';
import {TodoList}           from './todos/todo/components/todo-list';
import {StatusSelector}     from './todos/todo/components/status-selector';
import {SearchBox}          from './todos/search/components/search-box';
import {HeroesComponent}    from './heroes/components/heroes.component';
import {HeroService}        from './heroes/services/hero.service';


@Component({
    selector: 'my-app',
    directives: [TodoListItem, TodoList, StatusSelector, SearchBox, HeroesComponent],
    templateUrl: '/app/app.component.html',
    providers: [HeroService]
})
export class AppComponent { 
    public title = 'Tour of Heroes';
}