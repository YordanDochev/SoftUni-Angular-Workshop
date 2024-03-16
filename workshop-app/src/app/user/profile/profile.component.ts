import { Component } from '@angular/core';
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
export class ProfileComponent {
  // user: UserProfileDetails | undefined;
  showEditMode: boolean = false;
  profileDetails: UserProfileDetails | undefined;

  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    phoneNumber: [''],
  });
  constructor(private userService: UserService, private fb: FormBuilder) {
    this.profileDetails = this.userService.user;
  }

  onEditClick(): void {
    this.showEditMode = !this.showEditMode;
    // this.profileDetails = {
    //   firstName: this.user?.firstName,
    //   email: this.user?.email,
    //   phoneNumber: this.user?.phoneNumber,
    // };
  }

  saveProfileHandle(): void {
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = this.form.value as UserProfileDetails;
    this.showEditMode = !this.showEditMode;
  }

  onCancelClick(e: Event): void {
    e.preventDefault();
    this.showEditMode = !this.showEditMode;
    
  }
}
