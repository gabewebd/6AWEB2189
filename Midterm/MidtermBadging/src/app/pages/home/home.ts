import { Component, inject } from '@angular/core';
import { AsyncPipe, SlicePipe, UpperCasePipe, NgIf, NgFor } from '@angular/common';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, SlicePipe, UpperCasePipe, NgIf, NgFor],
  templateUrl: './home.html'
})
export class HomeComponent {
  dataService = inject(DataService);
}
