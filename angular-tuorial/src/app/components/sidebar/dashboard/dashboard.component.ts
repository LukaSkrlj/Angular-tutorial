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
  hero: Hero =  {
    costume : {
      accessories : "No accessory",
      adornments : "Rope/String",
      arms : "Hide covering upper limb",
      belts : "Suspenders",
      boots : "Ballet-like",
      bring : "upper limb",
      dominantColour : "Silver",
      gloves : "Welder",
      hat : "Karakul",
      legs : "Plastic - Transparent cover",
      logoType : "Number located left foot",
      mask : "Masquerade (All but mouth area)",
      secondaryColour : "Beige",
      shoulders : "Flared",
      specialProperties : "Heat Resistant",
      tape : "Typical Cape",
      torso : "Hide"
    },
    gender : "female",
    id : 101,
    location : "South Africa",
    name : "Dr Nice",
    power : {
      dangerLevel : "Trivial",
      range : "30",
      type : "psychic",
      unit : "imperial"
    },
    ranking : 4
  };

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
      .subscribe(heroes => this.heroes = heroes.hero.sort((a,b) => (a.ranking < b.ranking) ? 1 : ((b.ranking < a.ranking) ? -1 : 0)).slice(0, 5));
  }

  onSelect(hero: Hero): void {
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  ngOnDestroy(){
    this.subscriptions.dispose();
  }
}
