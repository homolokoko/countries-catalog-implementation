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
  
  dataSource:any;
  searchText="";
  url="https://restcountries.com/v3.1/all";
  constructor(private http:HttpClient){}

  @ViewChild(MatPaginator) paginator! : MatPaginator; 


  ngOnInit(): void {
      this.http.get(this.url)
      .subscribe( (data:any) => {this.dataSource = data} )
  }
  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource<IContent>(this.dataSource);
      this.dataSource.paginator = this.paginator;
      return this.dataSource;
  }

  
}
