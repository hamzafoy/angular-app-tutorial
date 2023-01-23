import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './mock-heroes-list';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`)
  }

  private heroesUrl = 'api/heroes';

  getHero(id: number): Observable<Hero> {
    const hero = Heroes.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  getHeroes(): Observable<Hero[]> {
    //this.log('Fetched Heroes Data');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  constructor(private messageService: MessageService, private http: HttpClient) { }
}