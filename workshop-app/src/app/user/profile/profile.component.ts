import { Component } from '@angular/core';
import { UserForAuth } from 'src/app/types/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: UserForAuth | undefined;
  constructor(private userService: UserService) {
    this.user = this.userService.user;
    console.log(this.user);
  }
}
