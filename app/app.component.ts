import {Component} from 'angular2/core';
import {TodoListItem} from './todos/todo/components/todo-list-item';
import {TodoList} from './todos/todo/components/todo-list';
import {StatusSelector} from './todos/todo/components/status-selector';
import {SearchBox} from './todos/search/components/search-box';
import {Hero} from './heroes/models/Hero';
import {HeroDetailComponent} from './heroes/components/hero-detail.component';
import {HeroService} from './heroes/services/hero.service';


@Component({
    selector: 'my-app',
    //styleUrls: ['/app/app.component.css'],
    directives: [TodoListItem, TodoList, StatusSelector, SearchBox, HeroDetailComponent],
    templateUrl: '/app/app.component.html',
    providers: [HeroService]
})
export class AppComponent { 
    constructor(private _heroService: HeroService) { }
    
    public title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    
    onSelect(hero: Hero) { 
        this.selectedHero = hero; 
    }
    
    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    
    ngOnInit(){
        this.getHeroes();
    }
}