
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MesagesComponent } from './mesages/mesages.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent, children: [
    { path: ':id', component: HeroDetailComponent, pathMatch: 'full'},
  ]},
  { path: 'messages', component: MesagesComponent },
  { path: 'news', component: NewsComponent},
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
