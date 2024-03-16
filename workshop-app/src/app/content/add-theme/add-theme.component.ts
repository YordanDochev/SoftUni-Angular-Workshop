import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css'],
})
export class AddThemeComponent {
  constructor(private contentService: ContentService) {}

  addTheme(ev: Event, themeName: string, themeDescription: string) {
    ev.preventDefault();
    this.contentService.createTheme(themeName, themeDescription);
  }

  submitFormHandler(form:NgForm){
    if(form.invalid){
      return;
    }
    console.log(form.value);
    
  }
}
