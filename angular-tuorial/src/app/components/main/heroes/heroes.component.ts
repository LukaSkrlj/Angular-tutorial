import { MessageService } from '../../../services/message.service';

import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import { Hero } from '../../../models/hero';
import { HeroService } from '../../../services/hero.service';
import { SubscriptionContainer } from 'src/app/models/subscriptions-container';
import { Event } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit, OnDestroy {
  selectedHero?: Hero;

  heroes: Hero[] = [];
  subscriptions = new SubscriptionContainer();

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.subscriptions.add = this.heroService.currentHero
      .subscribe((hero) => this.selectedHero = hero);
    this.subscriptions.add = this.heroService.getHeroes()
      .subscribe(heroes => {this.heroes = heroes.hero; console.log(heroes)});
  }

  getHeroesData(){
    this.heroService.getHeroesData()
    .subscribe(heroes => { console.log(heroes)});
  }

  getHeroes(): void {
    this.heroService.getHeroes();
  }

  updateHero(heroName: string){
    if (this.selectedHero) {
      this.selectedHero.name = heroName;
      this.heroService.updateHero(this.selectedHero);
    }
  }
 
  onSelect(hero: Hero) :void {
    //getHeroes() se zove za update liste kad se klikne save da se ime promjeni, neefektivno
    //zasad sam stavio tako, mogu sve heroje pohranjivat u polje i onda iz polja dohvacivati podatke
    // medjutim nigdje ne postoji garancija da se heroju stvarno updejtalo ime
    this.getHeroes(); 
    this.heroService.onSelectHero(hero);
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.subscriptions.add = this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.subscriptions.add = this.heroService.deleteHero(hero.id).subscribe();
  }

  ngOnDestroy(){
    this.subscriptions.dispose();
  }
}
