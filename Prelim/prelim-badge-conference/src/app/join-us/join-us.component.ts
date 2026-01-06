import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent {
  // Model for Two-Way Binding using Signals
  registrationData = {
    firstname: signal(''),
    lastname: signal(''),
    email: signal(''),
    institution: signal('')
  };

  // Computed signal for Fullname display
  fullName = computed(() => {
    return `${this.registrationData.firstname()} ${this.registrationData.lastname()}`.trim();
  });

  showSuccess = signal(false);

  submitForm() {
    if (this.registrationData.firstname() && this.registrationData.email()) {
      this.showSuccess.set(true);
      setTimeout(() => this.showSuccess.set(false), 3000);
    }
  }
}
