import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, FormsModule, TruncatePipe],
  templateUrl: './services.html',
  styles: [`
    .service-item { border-bottom: 1px solid #eee; padding: 10px 0; }
    .search-box { padding: 8px; width: 100%; max-width: 300px; margin-bottom: 15px; }
  `]
})
export class ServicesComponent {
  private dataService = inject(DataService);

  // Stream for search input
  searchTerm$ = new BehaviorSubject<string>('');

  // Combine API data + Search term to create a live filtered list
  filteredPosts$ = combineLatest([
    this.dataService.posts$,
    this.searchTerm$
  ]).pipe(
    map(([posts, term]) => {
      const lowerTerm = term.toLowerCase();
      return posts.filter(p =>
        p.title.toLowerCase().includes(lowerTerm) ||
        p.body.toLowerCase().includes(lowerTerm)
      );
    })
  );

  onSearch(term: string) {
    this.searchTerm$.next(term);
  }
}
