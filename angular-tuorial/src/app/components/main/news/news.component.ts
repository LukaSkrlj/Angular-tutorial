import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
// import * as xml2js from "xml2js";
// import { NewsRss } from '../news-rss';
// import { StylesCompileDependency } from '@angular/compiler';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  //RssData: NewsRss = {rss: {$: undefined, channel: []}};
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  GetRssFeedData() {
    const options = 
    { params: new HttpParams().set('unit', 'second').set('interval', '10') }
    this.http.get<any>("https://lorem-rss.herokuapp.com/feed", options)
      .subscribe(data => {
        console.log(data);
       
      });
  }
}


 // let parseString = xml2js.parseString;
        // parseString(data, (err, result: NewsRss) => {
        //   this.RssData = result;
        // });
