import { Component, OnInit } from '@angular/core';
import { UserProfileDetails } from 'src/app/types/user';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  // user: UserProfileDetails | undefined;
  showEditMode: boolean = false;

  profileDetails: UserProfileDetails = {
    username: '',
    email: '',
    tel: '',
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    tel: [''],
  });
  constructor(private userService: UserService, private fb: FormBuilder) {}
  ngOnInit(): void {
    const { username, tel, email } = this.userService.user!;

    this.profileDetails = {
      username,
      email,
      tel,
    };

    this.form.setValue({
      username,
      email,
      tel,
    });
  }
  onEditClick(): void {
    this.showEditMode = !this.showEditMode;
  }

  saveProfileHandle(): void {
    if (this.form.invalid) {
      return;
    }
    this.profileDetails = this.form.value as UserProfileDetails;

    const { username, email, tel } = this.profileDetails;

    this.userService.updateProfile(username!, email!, tel).subscribe(() => {
      this.onEditClick();
    });
  }

  onCancelClick(e: Event): void {
    e.preventDefault();
    this.showEditMode = !this.showEditMode;
  }
}
