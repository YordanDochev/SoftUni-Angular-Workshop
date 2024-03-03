import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { ThemesListComponent } from './main/themes-list/themes-list.component';
import { PostsListComponent } from './main/posts-list/posts-list.component';
import { PostItemComponent } from './main/posts-list/post-item/post-item.component';
import { ThemeItemComponent } from './main/themes-list/theme-item/theme-item.component';

@NgModule({
  declarations: [AppComponent, MainComponent, ThemesListComponent, PostsListComponent,PostItemComponent,ThemeItemComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, CoreModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
