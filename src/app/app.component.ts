import { Component, OnInit } from '@angular/core';
import { FetchUrlService } from './service/fetch-url.service';
import { ICountry } from './model/icoutry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'CCI';
  constructor(private fetchData:FetchUrlService){}
  url!:ICountry[];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.fetchData.loadAll().subscribe(data => this.url = data);
    
  }






}
