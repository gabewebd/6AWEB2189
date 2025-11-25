import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  message = 'Data Binding Demonstration';
  imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2EFZwo7jYt7mHhHtHiNaVWjl9RddpSvfjAA&s';
  altText = 'cute cat';
  textColor = 'blue';
  isHighlighted = true;
  yourName = '';
  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
