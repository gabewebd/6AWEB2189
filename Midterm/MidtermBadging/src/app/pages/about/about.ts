import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  // Requirement: Imports DatePipe and UpperCasePipe
  imports: [DatePipe, UpperCasePipe], 
  templateUrl: './about.html',
  styleUrls: ['../../../styles.css']
})
export class AboutComponent {
  currentDate = new Date();
  
  // Text to demonstrate the pipe transformation
  headingText = 'About This Portal';
}