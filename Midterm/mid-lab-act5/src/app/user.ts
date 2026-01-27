import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { UserResponse } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // CORRECT URL for the data structure
  private apiUrl = 'https://dummyjson.com/users'; 

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserResponse> {
    // 1. Check Local Storage
    const cachedData = localStorage.getItem('users_data');

    if (cachedData) {
      // 2. If data exists, parse it and return it as an Observable
      console.log('Returning cached data');
      return of(JSON.parse(cachedData));
    }

    // 3. If no data, fetch from API
    console.log('Fetching from API');
    return this.http.get<UserResponse>(this.apiUrl).pipe(
      tap((response) => {
        // 4. Save the result to Local Storage for next time
        localStorage.setItem('users_data', JSON.stringify(response));
      })
    );
  }
}