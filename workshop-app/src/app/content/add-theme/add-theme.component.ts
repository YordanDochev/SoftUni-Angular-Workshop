import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css'],
})
export class AddThemeComponent {
  constructor(private contentService: ContentService,private router:Router,private userService:UserService) {
    userService.user$.subscribe((data) => console.log(data));

  }

  submitFormHandler(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { themeName, postText } = form.value;
    console.log(themeName, postText);
    
    this.contentService.createTheme(themeName, postText).subscribe(() => {
      this.router.navigate(['/theme'])
    });
  }
}
