import {Component, OnInit} from 'angular2/core';
import {Hero} from '../models/Hero';
import {HeroDetailComponent} from '../components/hero-detail.component';
import {HeroService} from '../services/hero.service';


@Component({
    selector: 'my-heroes',
    //styleUrls: ['/app/app.component.css'],
    directives: [HeroDetailComponent],
    templateUrl: '/app/heroes/components/heroes.component.html',
    providers: [HeroService]
})
export class HeroesComponent implements OnInit { 
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