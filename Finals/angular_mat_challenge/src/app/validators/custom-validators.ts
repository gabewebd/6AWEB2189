import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const regex = /^[a-zA-Z][a-zA-Z0-9]{7,}$/;
      return regex.test(control.value) ? null : { passwordComplexity: true };
    };
  }

  static dobValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const dateOfBirth = new Date(control.value);
      const birthYear = dateOfBirth.getFullYear();
      return birthYear <= 2006 ? null : { invalidAge: true };
    };
  }

  static phoneValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const regex = /^\+?[0-9]{10,14}$/;
      return regex.test(control.value) ? null : { invalidPhone: true };
    };
  }

  static socialHandleValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      // Must start with @ and have at least 1 more character
      return control.value.startsWith('@') && control.value.length > 1 
        ? null : { invalidHandle: true };
    };
  }
}
