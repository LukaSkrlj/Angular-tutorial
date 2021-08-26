import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-tutorial';
  opened: boolean = false;
  constructor(private http: HttpClient){}
  
  ngOnInit(){
    
  }

  toogleSidebar(open: boolean){
    this.opened = open;
  }
}
