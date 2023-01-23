import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Storm' },
      { id: 2, name: 'Wolverine' },
      { id: 3, name: 'Cyclops' },
      { id: 4, name: 'Jean Gray' },
      { id: 5, name: 'Dr. Xavier' },
      { id: 6, name: 'Magneto' },
      { id: 7, name: 'Nightcrawler' },
      { id: 8, name: 'Rogue' },
      { id: 9, name: 'Superman' },
      { id: 10, name: 'Batman' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}