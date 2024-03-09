import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesListComponent } from './main/themes-list/themes-list.component';
import { MainComponent } from './main/main.component';
import { ThemeItemComponent } from './main/themes-list/theme-item/theme-item.component';
import { PostItemComponent } from './main/posts-list/post-item/post-item.component';
import { PostsListComponent } from './main/posts-list/posts-list.component';
import { SharedModule } from '../shared/shared.module';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ContentRoutingModule } from './content-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainComponent,
    ThemesListComponent,
    ThemeItemComponent,
    PostItemComponent,
    PostsListComponent,
    AddThemeComponent,
    CurrentThemeComponent,
  ],
  imports: [CommonModule, SharedModule, ContentRoutingModule,RouterModule],
  exports: [
    MainComponent,
    ThemesListComponent,
    ThemeItemComponent,
    PostItemComponent,
    PostsListComponent,
  ],
})
export class ContentModule {}
