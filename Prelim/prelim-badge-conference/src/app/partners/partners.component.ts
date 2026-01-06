import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
  // Use One-way binding for categories and data
  categories = ['All', 'Platinum', 'Gold', 'Silver', 'Bronze'];
  selectedCategory = signal('All');

  // Partner data based on screenshot content
  partners = signal([
    { name: 'Microsoft', tier: 'Platinum', icon: 'bi bi-microsoft', industry: 'Software & Cloud', website: 'https://microsoft.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { name: 'Apple, Inc.', tier: 'Gold', icon: 'bi bi-apple', industry: 'Consumer Electronics', website: 'https://apple.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Amazon', tier: 'Silver', icon: 'bi bi-amazon', industry: 'E-commerce & Logistics', website: 'https://amazon.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Google, Inc.', tier: 'Bronze', icon: 'bi bi-google', industry: 'Search & AI', website: 'https://google.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' }
  ]);

  // Use computed signal for optimized filtering (Directive logic)
  filteredPartners = computed(() => {
    const cat = this.selectedCategory();
    return cat === 'All'
      ? this.partners()
      : this.partners().filter(p => p.tier === cat);
  });

  // Event Binding helper for CSS classes
  getTierClass(tier: string): string {
    switch (tier) {
      case 'Platinum': return 'bg-platinum-subtle text-platinum-dark border border-platinum';
      case 'Gold': return 'bg-gold-subtle text-gold-dark border border-gold';
      case 'Silver': return 'bg-silver-subtle text-silver-dark border border-silver';
      case 'Bronze': return 'bg-bronze-subtle text-bronze-dark border border-bronze';
      default: return 'bg-light text-secondary';
    }
  }
}
