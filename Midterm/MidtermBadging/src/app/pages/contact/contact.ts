import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './contact.html',
  styles: [`
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    input, textarea { width: 100%; padding: 8px; margin-top: 5px; margin-bottom: 15px; }
  `]
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  submit() {
    alert('Submitted!');
  }
}
