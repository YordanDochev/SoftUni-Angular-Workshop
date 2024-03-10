import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/types/theme';
import { ContentService } from '../../content.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] = [];
  isLoaded: boolean = false;
  constructor(private api: ContentService, private userService: UserService) {}
  ngOnInit(): void {
    this.api.getThemes().subscribe((data) => {
      this.themes = data;

      this.isLoaded = true;
    });
  }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  
}
