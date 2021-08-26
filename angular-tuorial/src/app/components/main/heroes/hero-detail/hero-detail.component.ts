import { Hero } from '../../../../models/hero';
import { Component, OnInit, Input, OnDestroy, Output } from '@angular/core';

import { HeroService } from '../../../../services/hero.service';
import { SubscriptionContainer } from 'src/app/models/subscriptions-container';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit, OnDestroy {

  @Input() hero?: Hero;
  @Output() heroSaved = new EventEmitter<string>();
  subscriptions = new SubscriptionContainer();

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {}

  save(hero: string): void {
    this.heroSaved.emit(hero);
  }

  ngOnDestroy(){
    this.subscriptions.dispose();
  }
}
