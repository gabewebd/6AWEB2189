import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  // Observable variable ending in $
  // shareReplay(1) ensures we don't hit the API multiple times
  posts$: Observable<Post[]> = this.http.get<Post[]>(this.apiUrl).pipe(
    shareReplay(1)
  );
}
