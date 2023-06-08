import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { IContent } from '../content';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  
})
export class TestComponent implements OnInit,AfterViewInit {

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


