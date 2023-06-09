import { Injectable } from '@angular/core';
import { ICountry } from '../model/icoutry';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ObserversModule } from '@angular/cdk/observers';

@Injectable({
  providedIn: 'root'
})
export class FetchUrlService {
  sort() {
    throw new Error('Method not implemented.');
  }

  url="https://restcountries.com/v3.1/all";

  private _country:BehaviorSubject<ICountry[]>;

  private dataStore:{ country:ICountry[]}

  constructor(private http:HttpClient) { 
    this.dataStore = {country:[]} ;
    this._country = new BehaviorSubject<ICountry[]>([]);
  }

  get country():Observable<ICountry[]>{
    return this._country.asObservable();
  }

  loadAll():Observable<ICountry[]>{
    return this.http.get<ICountry[]>(this.url)
  }
}
