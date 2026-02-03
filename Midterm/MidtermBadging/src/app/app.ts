import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router'; // <--- Ensure these are imported

@Component({
  selector: 'app-root',
  standalone: true,
  // 1. THIS ARRAY IS CRITICAL. Without it, the links in HTML are just dead text.
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Community Help Desk';
}
