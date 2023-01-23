import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './mock-heroes-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    const heroes = of(Heroes);
    return heroes;
  }

  constructor() { }
}
