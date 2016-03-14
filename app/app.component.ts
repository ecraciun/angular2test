import {Component}              from 'angular2/core';
import {TodoListItem}           from './todos/todo/components/todo-list-item';
import {TodoList}               from './todos/todo/components/todo-list';
import {StatusSelector}         from './todos/todo/components/status-selector';
import {SearchBox}              from './todos/search/components/search-box';
import {HeroesComponent}        from './heroes/components/heroes.component';
import {HeroService}            from './heroes/services/hero.service';
import {DashboardComponent}     from './dashboard.component';
import {HeroDetailComponent}    from './heroes/components/hero-detail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS }     from 'angular2/router';


@Component({
    selector: 'my-app',
    directives: [TodoListItem, TodoList, StatusSelector, SearchBox, ROUTER_DIRECTIVES],
    templateUrl: '/app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [HeroService, ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    }
])
export class AppComponent { 
    public title = 'Tour of Heroes';
}