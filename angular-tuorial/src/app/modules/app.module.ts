import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { AppComponent } from '../app.component';
import { HeroesComponent } from '../components/main/heroes/heroes.component';
import { HeroDetailComponent } from '../components/main/heroes/hero-detail/hero-detail.component';
import { MesagesComponent } from '../components/main/mesages/mesages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from '../components/sidebar/dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../services/in-memory-data.service';
import { HeroSearchComponent } from '../components/header/hero-search/hero-search.component';
import { HeaderComponent } from '../components/header/header.component';
import { MainComponent } from '../components/main/main.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { NewsComponent } from '../components/main/news/news.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';


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
    HttpClientJsonpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angular-tutorial'), // Required for everything
    AngularFirestoreModule, // Only required for database features
    // Only required for auth features,
    
    

    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [ ],
  bootstrap: [AppComponent]


})
export class AppModule { }

