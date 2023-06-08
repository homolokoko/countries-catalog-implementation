import { Injectable } from '@angular/core';
import { IContent } from './content';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url = "https://restcountries.com/v3.1/all";
  constructor(private http:HttpClient){}

  getSearch(nativeName:string):Observable<any>{
    return this.http.get(`${this.url}/name/official/search=?q=${nativeName}`);
  }
  
}
