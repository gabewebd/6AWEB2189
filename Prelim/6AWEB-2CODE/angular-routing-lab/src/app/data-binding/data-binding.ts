import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Replaced RouterOutlet with CommonModule

@Component({
  selector: 'app-data-binding',
  standalone: true, // IMPORTANT: Ensure standalone is set
  imports: [CommonModule, FormsModule], // Ensure CommonModule and FormsModule are included
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // Interpolation & Main Title (from previous examples)
  message = 'Data Binding Demonstration';

  // Property Binding (from previous examples)
  imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2EFZwo7jYt7mHhHtHiNaVWjl9RddpSvfjAA&s';
  altText = 'cute cat';

  // Style and Class Binding (from previous examples)
  textColor = 'blue';
  isHighlighted = true;

  // Two-Way Binding (from previous examples)
  yourName = '';

  // Event Binding (from previous examples)
  count = 0;

  // Event Binding Methods (from previous examples)
  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  studentName = "Ainsh";
  score = 95;
  imageUrl1 = "https://www.boredpanda.com/blog/wp-content/uploads/2025/07/68761e960552f_cutest-funny-cat-pictures-2.jpg"
  isDisabled = true;
  colSpanValue = 3;
  isPassing = true;
  boxColor = "purple";
  boxSize = "150px";
}
