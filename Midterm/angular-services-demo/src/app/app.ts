import { MyserviceService } from './myservice';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewCmpComponent } from './new-cmp/new-cmp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewCmpComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  todaydate;
  componentproperty;

  constructor(private myservice: MyserviceService) {
    this.todaydate = this.myservice.showTodayDate();
    this.componentproperty = this.myservice.serviceproperty;
  }
}
