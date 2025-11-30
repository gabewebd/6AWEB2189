import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-routing-lab');
  imageUrl1 = 'url(https://cdn.vectorstock.com/i/1000v/58/15/cute-clouds-on-blue-sky-pattern-vector-14535815.jpg)';
}