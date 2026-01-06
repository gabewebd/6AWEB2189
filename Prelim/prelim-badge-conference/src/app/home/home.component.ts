import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // One-way Data Binding via Signals
  confData = signal({
    title: 'Research Conferences',
    subtitle: 'Join our online events this 2026!',
    ctaText: 'Early-Bird Registration'
  });

  featuredSpeaker = signal({
    name: 'Dr. Sarah Mitchell',
    role: 'AI STRATEGY DIRECTOR',
    bio: 'Leading the charge in ethical AI development and global technological integration.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'
  });

  locations = signal([
    { name: 'France', track: 'Architecture and Fine Arts', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800', desc: 'The largest country in Western Europe, gateway between northern and southern regions.' },
    { name: 'Seoul', track: 'Humanities and Arts', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800', desc: 'Special City of Seoul, the vibrant capital and soul of South Korea.' },
    { name: 'San Francisco', track: 'Science and Technology', img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800', desc: 'Cultural and financial center, and one of the most cosmopolitan cities.' },
    { name: 'Boston', track: 'Engineering and Tech', img: 'https://images.unsplash.com/photo-1501949997128-2fdb9f6428f1?q=80&w=800', desc: 'Famous for its history, education, and being a global hub for engineering.' }
  ]);
}
