import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ContentModule } from './content/content.module';
import { HomeModule } from './home/home.module';
import { ErrorPageComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticationComponent } from './authentication/authentication.component';


@NgModule({
  declarations: [AppComponent, ErrorPageComponent, AuthenticationComponent],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    ContentModule,
    HomeModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
