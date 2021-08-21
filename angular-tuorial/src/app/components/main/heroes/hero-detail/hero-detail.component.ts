import { Hero } from '../../../../interfaces/hero';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { HeroService } from '../../../../services/hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {}

  save(): void {
    //promjenit da save metoda toogla vrijednost unutar heroes liste
    //za ispis koristit polje jer je http request spor al moz postoji bolja metoda za sve skupa osposobit
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => console.log(this.hero?.name));
    }
  }
}
