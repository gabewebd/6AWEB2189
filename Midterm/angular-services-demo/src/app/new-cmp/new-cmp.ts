import { Component } from '@angular/core';
import { MyserviceService } from '../myservice';

@Component({
  selector: 'app-new-cmp',
  standalone: true,
  imports: [],
  templateUrl: './new-cmp.html',
  styleUrl: './new-cmp.css'
})
export class NewCmpComponent {
  todaydate;
  newcomponent = 'Entered in new component!';

  constructor(private myservice: MyserviceService) {
    this.todaydate = this.myservice.showTodayDate();
  }
}
