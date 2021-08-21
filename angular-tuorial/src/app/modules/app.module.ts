import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';
import { HeroesComponent } from '../components/main/heroes/heroes.component';
import { APP_BASE_HREF } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../components/main/heroes/hero-detail/hero-detail.component';
import { MesagesComponent } from '../components/main/mesages/mesages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from '../components/sidebar/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../services/in-memory-data.service';
import { HeroSearchComponent } from '../components/header/hero-search/hero-search.component';
import { HeaderComponent } from '../components/header/header.component';
import { MainComponent } from '../components/main/main.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { NewsComponent } from '../components/main/news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MesagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ ],
  bootstrap: [AppComponent]


})
export class AppModule { }

