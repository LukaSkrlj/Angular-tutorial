import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { SubscriptionContainer } from 'src/app/interfaces/subscriptions-container';
// import * as xml2js from "xml2js";
// import { NewsRss } from '../news-rss';
// import { StylesCompileDependency } from '@angular/compiler';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {
  //RssData: NewsRss = {rss: {$: undefined, channel: []}};
  constructor(private http: HttpClient) {}
  subscriptions = new SubscriptionContainer();

  ngOnInit(): void {
  }

  GetRssFeedData() {
    const options = { params: new HttpParams()
      .set('unit', 'second')
      .set('interval', '10'),
    };
    
    this.subscriptions.add = this.http.get<any>("https://lorem-rss.herokuapp.com/feed", options)
      .subscribe(data => {
        console.log(data);
      });
  }

  ngOnDestroy(){
    this.subscriptions.dispose();
  }
}

 // let parseString = xml2js.parseString;
        // parseString(data, (err, result: NewsRss) => {
        //   this.RssData = result;
        // });
