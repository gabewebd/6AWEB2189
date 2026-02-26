import { Component, signal, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-results-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule, MatListModule, MatDividerModule, CommonModule],
  template: `
    <h2 mat-dialog-title>Submission Results</h2>
    <mat-dialog-content>
      <mat-list>
        <mat-list-item>
          <mat-icon matListItemIcon>person</mat-icon>
          <span matListItemTitle>Username</span>
          <span matListItemLine>{{ data.username || 'N/A' }}</span>
        </mat-list-item>
        <mat-divider inset></mat-divider>
        <mat-list-item>
          <mat-icon matListItemIcon>email</mat-icon>
          <span matListItemTitle>Email</span>
          <span matListItemLine>{{ data.email }}</span>
        </mat-list-item>
        <mat-divider inset></mat-divider>
        <mat-list-item>
          <mat-icon matListItemIcon>wc</mat-icon>
          <span matListItemTitle>Gender</span>
          <span matListItemLine>{{ data.gender | titlecase }}</span>
        </mat-list-item>
        <mat-divider inset></mat-divider>
        <mat-list-item>
          <mat-icon matListItemIcon>home</mat-icon>
          <span matListItemTitle>Address</span>
          <span matListItemLine>{{ data.address || 'N/A' }}</span>
        </mat-list-item>
        <mat-divider inset></mat-divider>
        <mat-list-item>
          <mat-icon matListItemIcon>calendar_today</mat-icon>
          <span matListItemTitle>Birth Date</span>
          <span matListItemLine>{{ data.birthDate | date:'mediumDate' }}</span>
        </mat-list-item>
        <mat-divider inset></mat-divider>
        <mat-list-item>
          <mat-icon matListItemIcon>trending_up</mat-icon>
          <span matListItemTitle>Skill Level</span>
          <span matListItemLine>{{ data.skillLevel }} / 10</span>
        </mat-list-item>
      </mat-list>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="dialogRef.close()">Close</button>
    </mat-dialog-actions>
  `,
  styles: [`
    mat-dialog-content { min-width: 300px; }
    ::ng-deep .mat-mdc-list-item-title { font-weight: bold; }
  `]
})
export class ResultsDialog {
  constructor(
    public dialogRef: MatDialogRef<ResultsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSliderModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private fb = inject(FormBuilder);
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar); // Inject the Snackbar here

  form: FormGroup = this.fb.group({
    username: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    gender: ['male'],
    address: [''],
    birthDate: [null, Validators.required],
    skillLevel: [4]
  });

  onSubmit() {
    if (this.form.valid) {
      // 1. Trigger the Snackbar notification
      this.snackBar.open('Registration Submitted Successfully!', 'Close', {
        duration: 3000, // Disappears after 3 seconds
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });

      // 2. Open the Dialog
      this.dialog.open(ResultsDialog, {
        width: '400px',
        data: this.form.value
      });
    }
  }
}
