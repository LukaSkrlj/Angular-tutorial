import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppComponent } from '../app.component';
import { HeroesComponent } from '../components/main/heroes/heroes.component';
import { HeroDetailComponent } from '../components/main/heroes/hero-detail/hero-detail.component';
import { MesagesComponent } from '../components/main/mesages/mesages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from '../components/sidebar/dashboard/dashboard.component';
import { HeroSearchComponent } from '../components/header/hero-search/hero-search.component';
import { HeaderComponent } from '../components/header/header.component';
import { MainComponent } from '../components/main/main.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { NewsComponent } from '../components/main/news/news.component';
import { environment } from 'src/environments/environment';


const material = [

  MatAutocompleteModule,
  MatSliderModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  
]

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
    BrowserAnimationsModule, 
    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angular-tutorial'), 

  ],

  providers: [material],
  bootstrap: [AppComponent]
})

export class AppModule { }

