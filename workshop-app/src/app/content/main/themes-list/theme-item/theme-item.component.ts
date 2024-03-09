import { Component, Input, OnInit } from '@angular/core';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-theme-item',
  templateUrl: './theme-item.component.html',
  styleUrls: ['./theme-item.component.css'],
})
export class ThemeItemComponent{
  @Input('theme') theme = {} as Theme;

}
