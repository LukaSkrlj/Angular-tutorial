import { JsonHero } from './../interfaces/json-hero';
import { Hero } from '../interfaces/hero';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'http://localhost:4200/assets/heroes.json'; 
  private heroInputSource = new Subject<Hero>();
  currentHero = this.heroInputSource.asObservable();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor( private http: HttpClient, private messageService: MessageService) { }

  getHeroesData(){
    let data = this.http.get<any>('https://hero-rest-api-default-rtdb.firebaseio.com/hero-rest-api-default-rtdb/hero')
    .pipe(
       tap(_ => this.log('fetched heroes')),
       catchError(this.handleError<any>('getHeroes', [])) // then handle the error
    );
    return data;
  }

  getHeroes(): Observable<JsonHero> {
    let jsonHero = this.http.get<object>(this.heroesUrl)
    .pipe(
      map(json => json = this.keysToCamel(json)),
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<any>('getHeroes', []))
   );
    
    return jsonHero;
  }

  
  keysToCamel(o: any):any {
    if (typeof o === 'object' && !Array.isArray(o) && typeof o != 'function') {
      const n:any= {};
      //
      Object.keys(o)
        .forEach((k) => {
          n[this.toCamel(k)] = this.keysToCamel(o[k]);
        });
  
      return n;
    } else if (Array.isArray(o)) {
      return o.map((i) => {
        return this.keysToCamel(i);
      });
    }
  
    return o;
  };

  toCamel = (s : string) => {
    return s.replace(/([-_][a-z])/ig, ($1 : string) => {
      return $1.toUpperCase()
        .replace('-', '')
        .replace('_', '');
    });
  };

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  updateHero(hero: Hero): Observable<any> {
    this.heroInputSource.next(hero);
    this.http.put(this.heroesUrl, hero, this.httpOptions).subscribe(a => console.log(a))
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
  
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
}
function toCamel(k: string) {
  throw new Error('Function not implemented.');
}

