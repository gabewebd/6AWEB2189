import { Component, signal } from '@angular/core';
import { PipesDemoComponent } from './pipes-demo/pipes-demo';

@Component({
  selector: 'app-root',
  imports: [PipesDemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Midterm-AngularPipes');
}
