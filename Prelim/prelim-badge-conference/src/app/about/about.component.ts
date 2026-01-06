import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  submissionStatus = signal('');
  selectedMember = signal('');

  // Event Binding for the Free Gift button
  onGiftClick() {
    alert('Congratulations! Your free conference guide has been sent to your email.');
  }

  // Event Binding for the Inquiry Form
  handleInquiry(value: string) {
    if (!value.trim()) {
      this.submissionStatus.set('Please enter your inquiry first.');
      return;
    }
    this.submissionStatus.set('Thank you! Our team will contact you shortly.');
    setTimeout(() => this.submissionStatus.set(''), 4000);
  }

  // Team data for the Leadership section
  team = [
    { name: 'Arthur Pen', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
    { name: 'Lena Thorne', role: 'Chief Operations', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400' },
    { name: 'Xavier Cole', role: 'Global Logistics', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
    { name: 'Sara Zhang', role: 'Head of Comms', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' }
  ];
}
