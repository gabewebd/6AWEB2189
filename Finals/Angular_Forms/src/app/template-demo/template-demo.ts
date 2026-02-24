import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Step 1: Import

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [CommonModule, FormsModule], // Step 1: Add to imports array
  templateUrl: './template-demo.html',
  styleUrl: './template-demo.css'
})
export class TemplateDemoComponent {
  title = 'Template Driven Demo';

  // Step 2: Define Bound Properties
  username = '';
  email = '';
  password = '';
  role = '';
  gender = '';           // New Field
  status = '';           // New Field
  comments = '';         // New Field
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log("Form Submitted!", {
      username: this.username,
      email: this.email,
      role: this.role,
      gender: this.gender,
      status: this.status,
      comments: this.comments
    });
  }
}
