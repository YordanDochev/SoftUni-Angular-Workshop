import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { Theme } from 'src/app/types/theme';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css'],
})
export class CurrentThemeComponent implements OnInit {
  theme = {} as Theme;
  constructor(
    private contentService: ContentService,
    private activeRoute: ActivatedRoute,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['themeId'];
      this.contentService.getTheme(id).subscribe((data) => {
        this.theme = data;
      });
    });
  }

  get isLoggedIn():boolean{
    return this.userService.isLogged
  }
}
