import { MessageService } from '../../../services/message.service';

import { Component, OnDestroy, OnInit } from '@angular/core';

import { Hero } from '../../../interfaces/hero';
import { HeroService } from '../../../services/hero.service';
import { SubscriptionContainer } from 'src/app/interfaces/subscriptions-container';

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
    this.getHeroes();
  }

  getHeroesData(){
    this.heroService.getHeroesData()
    .subscribe(heroes => { console.log(heroes)});
  }

  getHeroes(): void {
    this.subscriptions.add = this.heroService.getHeroes()
        .subscribe(heroes => {this.heroes = heroes.hero; console.log(heroes)});
  }
 
  onSelect(hero: Hero) :void {
    //this.heroService.getHeroes();
    this.getHeroes();
    this.selectedHero = hero;
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
