import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { BehaviorSubject, combineLatest, map, catchError, of } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, SlicePipe, FormsModule, TruncatePipe],
  templateUrl: './services.html',
  styleUrls: ['../../../styles.css'] // Ensures styles are linked
})
export class ServicesComponent {
  private dataService = inject(DataService);

  // Requirement: Observable Stream for search
  searchTerm$ = new BehaviorSubject<string>('');

  // Requirement: Error state tracking
  errorMessage = '';

  // Requirement: Combined Observable (Search + Data)
  filteredPosts$ = combineLatest([
    this.dataService.posts$.pipe(
      catchError(err => {
        this.errorMessage = 'Failed to load services. Please try again later.';
        return of([]); // Return empty list on error
      })
    ),
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
