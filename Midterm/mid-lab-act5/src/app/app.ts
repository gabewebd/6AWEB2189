import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user'; 
import { LocalService } from './local';
import { User } from './user.model';
import { LocalUser } from './local.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('http-client-demo');
  
  // Two separate arrays for two separate tables
  localUsers: LocalUser[] = [];
  apiUsers: User[] = [];

  constructor(
    private userService: UserService,
    private localService: LocalService
  ) {}

  ngOnInit() {
    // 1. Fetch Local List
    this.localService.getUsers().subscribe(data => {
      this.localUsers = data;
    });

    // 2. Fetch Remote JSON Source (with your existing caching logic)
    this.userService.getUsers().subscribe(response => {
      this.apiUsers = response.users.slice(0, 5); 
    });
  }
}