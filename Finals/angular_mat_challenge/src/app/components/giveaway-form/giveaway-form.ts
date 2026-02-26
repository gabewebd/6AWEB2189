import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CustomValidators } from '../../validators/custom-validators';
import { SubmissionDialogComponent } from '../submission-dialog/submission-dialog';

@Component({
  selector: 'app-giveaway-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './giveaway-form.html',
  styleUrl: './giveaway-form.css'
})
export class GiveawayFormComponent {
  private fb = inject(FormBuilder);
  private dialog = inject(MatDialog);

  giveawayForm: FormGroup;
  hidePassword = true;


  constructor() {
    this.giveawayForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      gamerTag: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, CustomValidators.phoneValidator()]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      socialMedia: ['', [Validators.required, CustomValidators.socialHandleValidator()]],
      password: ['', [Validators.required, CustomValidators.passwordValidator()]],
      dob: ['', [Validators.required, CustomValidators.dobValidator()]]
    });
  }

  onSubmit() {
    if (this.giveawayForm.valid) {
      const { fullName, email, gamerTag } = this.giveawayForm.value;

      this.dialog.open(SubmissionDialogComponent, {
        width: '450px',
        data: { name: fullName, email, gamerTag },
        disableClose: true
      });

      console.log('Form Submitted!', this.giveawayForm.value);
      this.giveawayForm.reset();
    }
  }
}
