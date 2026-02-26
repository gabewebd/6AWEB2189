import { Component, signal, inject, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GiveawayFormComponent } from './components/giveaway-form/giveaway-form';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GiveawayFormComponent, MatSlideToggleModule, CommonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_mat_challenge');
  isDarkMode = signal(true);
  private renderer = inject(Renderer2);

  toggleTheme() {
    this.isDarkMode.update(val => !val);
    if (this.isDarkMode()) {
      this.renderer.removeClass(document.body, 'light-mode');
    } else {
      this.renderer.addClass(document.body, 'light-mode');
    }
  }
}
