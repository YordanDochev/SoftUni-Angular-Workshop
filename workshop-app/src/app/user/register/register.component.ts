import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { matchPasswordValidator } from 'src/app/shared/utils/match-password-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    tel: [''],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required,Validators.minLength(5)]],
        rePassword: ['', [Validators.required]],
      },
      { validators: [matchPasswordValidator('password','rePassword')] }
    ),
  });
  constructor(private fb: FormBuilder) {}

  register(): void {
    console.log(this.form.value);
    if (this.form.invalid) {
      return;
    }
  }
}
