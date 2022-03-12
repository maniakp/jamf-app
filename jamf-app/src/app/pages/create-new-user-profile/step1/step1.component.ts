import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit {
  @Input() form: FormGroup | null | undefined;

  constructor() {}

  ngOnInit(): void {}

  get email() {
    return this.form!.get('email');
  }
  get password() {
    return this.form!.get('password');
  }
  get passwordConfirm() {
    return this.form!.get('passwordConfirm');
  }

  get errorMessage(): string {
    const element = this.form!.get('email');
    return element?.hasError('required')
      ? 'Required error message'
      : element?.hasError('maxlength')
      ? 'Max length error'
      : element?.hasError('minlength')
      ? 'Min length error'
      : element?.hasError('nowhitespaceerror')
      ? 'No white space error'
      : '';
  }

  getErrorMessage(el: string) {
    const fc = this.form!.get(el);
    return fc?.hasError('required')
      ? 'You must enter a value'
      : fc?.hasError('email')
      ? 'Not a valid email'
      : fc?.hasError('pattern')
      ? 'Password mismatch'
      : 'error';
  }
}
