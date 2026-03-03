import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly APIUrl = "http://localhost:5038/api/books/";

  constructor(private http: HttpClient) {}

  books: any[] = [];

  // Form Bindings
  newBook: string = '';
  newDesc: string = '';
  newAuthor: string = '';
  newYear: number | null = null;
  newPrice: number | null = null;

  // Edit State
  isEditing: boolean = false;
  editingId: any = null;

  ngOnInit() {
    this.refreshBooks();
  }

  refreshBooks() {
    this.http.get(this.APIUrl + 'GetBooks').subscribe(data => {
      this.books = data as any[];
    });
  }

  editBook(book: any) {
    this.isEditing = true;
    this.editingId = book.id;
    this.newBook = book.title;
    this.newDesc = book.description || book.desc;
    this.newAuthor = book.author;
    this.newYear = book.yearPublished || book.year;
    this.newPrice = book.price;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cancelEdit() {
    this.isEditing = false;
    this.editingId = null;
    this.resetForm();
  }

  submitForm() {
    if (!this.newBook || !this.newAuthor || !this.newYear || !this.newPrice) {
      alert("Please fill in required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("title", this.newBook);
    formData.append("description", this.newDesc);
    formData.append("author", this.newAuthor);
    formData.append("yearPublished", this.newYear!.toString());
    formData.append("price", this.newPrice!.toString());

    if (this.isEditing) {
      formData.append("id", this.editingId);
      this.http.post(this.APIUrl + 'UpdateBook', formData, { responseType: 'text' })
        .subscribe({
          next: (res) => {
            alert(res);
            this.cancelEdit();
            this.refreshBooks();
          },
          error: (err) => alert("Update failed. Check if Backend has UpdateBook endpoint.")
        });
    } else {
      this.http.post(this.APIUrl + 'AddBook', formData, { responseType: 'text' })
        .subscribe({
          next: (res) => {
            alert(res);
            this.refreshBooks();
            this.resetForm();
          }
        });
    }
  }

  deleteBook(id: any) {
    if(confirm("Permanently remove this volume from the archives?")) {
      this.http.delete(this.APIUrl + 'DeleteBook?id=' + id, { responseType: 'text' })
        .subscribe(response => {
          alert(response);
          this.refreshBooks();
        });
    }
  }

  resetForm() {
    this.newBook = '';
    this.newDesc = '';
    this.newAuthor = '';
    this.newYear = null;
    this.newPrice = null;
  }
}
