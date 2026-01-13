import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- IMPORT THIS
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  standalone: true, // <--- Ensure this is set for modern Angular
  imports: [CommonModule], // <--- THIS FIXES THE "MISSING DATA" ISSUE
  templateUrl: './pipes-demo.html',
  styleUrls: ['./pipes-demo.css']
})
export class PipesDemoComponent implements OnInit {

  // --- STANDARD PIPES ---
  presentDate = new Date();
  price: number = 20000;
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];

  // --- ASYNC PIPE ---
  time$: Observable<Date>;

  // --- EXTRA PIPES ---
  testPercent: number = 0.259;
  testText: string = "angular is awesome";
  testObject: object = {
    id: 1,
    name: "Tanjiro Kamado",
    anime: "Demon Slayer",
    rank: "Kanoe"
  };

  constructor() {
    this.time$ = interval(1000).pipe(
      map(() => new Date())
    );
  }

  ngOnInit(): void {
  }
}