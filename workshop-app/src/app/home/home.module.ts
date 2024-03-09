import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContentComponent } from './home-content/home-content.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeContentComponent],
  imports: [CommonModule,SharedModule],
  exports:[HomeContentComponent]
})
export class HomeModule {}
