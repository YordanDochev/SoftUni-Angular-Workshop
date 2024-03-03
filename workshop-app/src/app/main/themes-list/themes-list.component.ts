import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] = [];
  isLoaded: boolean = false;
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.getThemes().subscribe((data) => {
      this.themes = data;

      this.isLoaded = true;
    });
  }
}
