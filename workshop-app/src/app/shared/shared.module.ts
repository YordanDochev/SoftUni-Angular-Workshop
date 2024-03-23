import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { EmailDirective } from './validator/email.directive';
import { SlicePipe } from './pipes/slice.pipe';
import { ElapsedTimesPipe } from './pipes/elapsed-times.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeComponent,
    EmailDirective,
    SlicePipe,
    ElapsedTimesPipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LoaderComponent,
    WelcomeComponent,
    EmailDirective,
    SlicePipe,
    ElapsedTimesPipe,
  ],
})
export class SharedModule {}
