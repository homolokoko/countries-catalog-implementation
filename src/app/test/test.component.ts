import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';




@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  
})
export class TestComponent implements OnInit {
  // url:string = "https://restcountries.com/v3.1/all";
  // dataSource:any;

  url:string = "https://restcountries.com/v3.1/all";
  dataSource:any;


  displayedColumns: string[] = ['flag', 'Name', 'cca2', 'cca3','nativeName','alternativeName','callingCode'];

  ngOnInit() {
      this._http.get(this.url).subscribe((data:any)=>{this.dataSource=data});
  }
  constructor(private _http:HttpClient){}


 

}
