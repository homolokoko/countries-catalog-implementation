import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  
})
export class TestComponent {


  @Input() items:any;
  

}


