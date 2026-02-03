import { Component, inject } from '@angular/core';
import { AsyncPipe, SlicePipe, UpperCasePipe, NgIf, NgFor } from '@angular/common';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-home',
  standalone: true,
  // Requirement: Imports built-in pipes (Async, Slice, UpperCase)
  imports: [AsyncPipe, SlicePipe, UpperCasePipe, NgIf, NgFor],
  templateUrl: './home.html',
  styleUrls: ['../../../styles.css'] // Using global styles
})
export class HomeComponent {
  // Requirement: Uses Shared Service (singleton)
  dataService = inject(DataService);
}
