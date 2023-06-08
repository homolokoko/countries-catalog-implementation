import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from './app.service';
import { debounceTime, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'CCI';
  dataSource:any;


  searchForm:FormGroup = new FormGroup({
    search:new FormControl(''),
  });

  list:Array<any>=[];

  constructor(private appService:AppService){
    this.searchForm.get('search')?.valueChanges
    .pipe(
      debounceTime(1000),
      distinctUntilChange(),
      switchMap((val:any) => {return this.appService.getSearch(val);})
    )
    .subscribe((val:any) => {this.list = val?.user});
  }

}
function distinctUntilChange(): import("rxjs").OperatorFunction<any, unknown> {
  throw new Error('Function not implemented.');
}

