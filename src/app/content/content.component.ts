import { MatTableDataSource } from '@angular/material/table';
import { AppService } from '../app.service';
import { IContent } from '../content';
import { AfterViewInit, Component,OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}




@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})



export class ContentComponent implements OnInit,AfterViewInit{

  
  val:any='';
  constructor(private _http:HttpClient){}

  // display column followed by displayedColumns array
  displayedColumns: string[] = ['flag', 'Name', 'cca2', 'cca3','nativeName','alternativeName','callingCode'];
 
  @ViewChild(MatPaginator) paginator!:MatPaginator ;

  // read all data from rest api
  url = "https://restcountries.com/v3.1/all";
    
  dataSource:any= new MatTableDataSource<IContent>();
  ngOnInit() {
      this._http.get(this.url).subscribe((data:any)=>{this.dataSource=data});
  }


  //configuring paginator
   ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<IContent>(this.dataSource);
      this.dataSource.paginator = this.paginator;
  }

}
