import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ContentModule } from './content/content.module';
import { UserModule } from './user/user.module';
// import { MainComponent } from './content/main/main.component';
// import { ThemesListComponent } from './content/main/themes-list/themes-list.component';
// import { ThemeItemComponent } from './content/main/themes-list/theme-item/theme-item.component';
// import { PostsListComponent } from './content/main/posts-list/posts-list.component';
// import { PostItemComponent } from './content/main/posts-list/post-item/post-item.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, CoreModule,ContentModule,UserModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
