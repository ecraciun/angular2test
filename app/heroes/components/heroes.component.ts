import {Component, OnInit}      from 'angular2/core';
import {Hero}                   from '../models/Hero';
import {HeroDetailComponent}    from '../components/hero-detail.component';
import {HeroService}            from '../services/hero.service';
import { Router }               from 'angular2/router';


@Component({
    selector: 'my-heroes',
    directives: [HeroDetailComponent],
    templateUrl: '/app/heroes/components/heroes.component.html',
    styleUrls: ['/app/heroes/components/heroes.component.css'] // THIS IS NOT WORKING!!! the only one, and I do not know why.....
})
export class HeroesComponent implements OnInit { 
    constructor(private _router: Router, 
                private _heroService: HeroService) { 
    }
    
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
    
    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}