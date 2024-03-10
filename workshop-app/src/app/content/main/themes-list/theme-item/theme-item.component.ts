import { Component, Input, OnInit } from '@angular/core';
import { Theme } from 'src/app/types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-theme-item',
  templateUrl: './theme-item.component.html',
  styleUrls: ['./theme-item.component.css'],
})
export class ThemeItemComponent {
  @Input('theme') theme = {} as Theme;
  constructor(private userService: UserService) {}

  get userId(): string {
    return this.userService.user?.id || '';
  }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  isSubscribed(theme: Theme) {
    const isSubscribedUser = theme.subscribers.find((s) => s === this.userId);

    return !!isSubscribedUser;
  }
}
