import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  readonly APIUrl = "http://localhost:5038/api/books/";

  constructor(private http: HttpClient) {}

  books: any[] = [];

  // 🔥 Bind these to form
  newBook: string = '';
  newDesc: string = '';
  newAuthor: string = '';
  newYear: number | null = null;
  newPrice: number | null = null;

  ngOnInit() {
    this.refreshBooks();
  }

  refreshBooks() {
    this.http.get(this.APIUrl + 'GetBooks')
      .subscribe(data => {
        this.books = data as any[];
      });
  }

  addBook() {
    // 1. Validation - ensures no nulls are sent
    if (!this.newBook || !this.newDesc || !this.newAuthor || !this.newYear || !this.newPrice) {
      alert("Please fill in all fields.");
      return;
    }

    // 2. Use FormData to match your Backend's original configuration
    const formData = new FormData();
    formData.append("title", this.newBook);
    formData.append("description", this.newDesc); // Ensure this matches backend property name
    formData.append("author", this.newAuthor);
    formData.append("yearPublished", this.newYear.toString());
    formData.append("price", this.newPrice.toString());

    // 3. Post with 'text' responseType
    // Many .NET APIs return a plain string like "Added Successfully" 
    // which breaks Angular unless we tell it to expect text.
    this.http.post(this.APIUrl + 'AddBook', formData, { responseType: 'text' })
      .subscribe({
        next: (response: string) => {
          alert(response); // Shows the "Added Successfully" message
          this.refreshBooks();
          this.resetForm();
        },
        error: (err) => {
          console.error("Full Error Details:", err);
          alert("Failed to add book. Check console for details.");
        }
      });
  }

  deleteBook(id: any) {
    this.http.delete(this.APIUrl + 'DeleteBook?id=' + id)
      .subscribe(response => {
        alert(response);
        this.refreshBooks();
      });
  }

  resetForm() {
    this.newBook = '';
    this.newDesc = '';
    this.newAuthor = '';
    this.newYear = null;
    this.newPrice = null;
  }
}