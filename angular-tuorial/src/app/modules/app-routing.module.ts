
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from '../components/main/heroes/heroes.component';
import { HeroDetailComponent } from '../components/main/heroes/hero-detail/hero-detail.component';
import { MesagesComponent } from '../components/main/mesages/mesages.component';
import { NewsComponent } from '../components/main/news/news.component';

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
