import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/types/theme';
import { ContentService } from '../../content.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] = [];
  isLoaded: boolean = false;
  constructor(private api: ContentService) {}
  ngOnInit(): void {
    this.api.getThemes().subscribe((data) => {
      this.themes = data;

      this.isLoaded = true;
    });
  }
}
