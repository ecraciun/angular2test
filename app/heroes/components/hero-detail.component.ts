import {Component} from 'angular2/core';
import {Hero} from '../models/Hero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: '/app/heroes/components/hero-detail.component.html',
    inputs: ['hero']
})
export class HeroDetailComponent {
    hero: Hero;
}