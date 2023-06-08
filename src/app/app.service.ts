import { Injectable } from '@angular/core';
import { IContent } from './content';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url = "https://restcountries.com/v3.1/all";
  private dataStore!:{content:IContent[]}
  private _content! : BehaviorSubject<IContent[]>;


  constructor(private http:HttpClient){
    this.dataStore = {content:[]};
    this._content = new BehaviorSubject<IContent[]>([]);
  }
  getAll(){
    this.http.get<IContent[]>(this.url)
    .subscribe(
      (data:any) => {
        this.dataStore.content = data;
        this._content.next(Object.assign({},this.dataStore).content);
      }
    );
  }

  get contents(): Observable<IContent[]>{
    return this._content.asObservable();
  }
  
}
