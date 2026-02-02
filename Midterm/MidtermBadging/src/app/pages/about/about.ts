import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './about.html'
})
export class AboutComponent {
  currentDate = new Date();
}
