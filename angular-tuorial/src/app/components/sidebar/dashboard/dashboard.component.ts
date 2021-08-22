import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from '../../../interfaces/hero';
import { HeroService } from '../../../services/hero.service';
import { MessageService } from '../../../services/message.service';
import { SubscriptionContainer } from 'src/app/interfaces/subscriptions-container';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit, OnDestroy {
  heroes: Hero[] = [];
  hero: Hero = {name: '', id: 0};
  subscriptions = new SubscriptionContainer();

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
    this.subscriptions.add = this.heroService.currentHero
      .subscribe((hero) =>{ 
        this.heroes = this.heroes.map(obj => obj.id === hero.id ? hero : obj);
    });
  }

  getHeroes(): void {
    this.subscriptions.add = this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 5));
  }

  onSelect(hero: Hero): void {
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  ngOnDestroy(){
    this.subscriptions.dispose();
  }
}
