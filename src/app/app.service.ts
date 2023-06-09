import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ICountry } from './model/icoutry';
// import 'rxjs/add/operators/catch';
// import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  
  private dataStore!:{country:ICountry[]}
  private _country! : BehaviorSubject<ICountry[]>;


  constructor(private httpClient:HttpClient, private httpBackend:HttpBackend){
    this.dataStore = {country:[]};
    this._country = new BehaviorSubject<ICountry[]>([]);
  }
  getAll(){
    const url = "https://restcountries.com/v3.1/all";
    return this.httpClient.get<ICountry[]>(url)
    .subscribe(
      (data) => {
        this.dataStore.country = data;
        this._country.next(Object.assign({},this.dataStore).country);
      },error =>{
        console.log("Failed to fetch data!");
      }
    );
  }

  get country(): Observable<ICountry[]>{
    return this._country.asObservable();
  }






// rest api service


  // getApi():Observable<ICountry[]>{
  //   // return this.httpClient.get<ICountry[]>(url)
  // }

  


  options: {
    headers?: HttpHeaders | { [header: string]: string | string[]; };
    observe?: 'body' | 'events' | 'response';
    params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; };
    reportProgress?: boolean;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    withCredentials?: boolean;
  } | undefined









  
}
