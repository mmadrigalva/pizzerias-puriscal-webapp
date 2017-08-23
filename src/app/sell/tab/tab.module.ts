import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabTitleComponent } from './tab-title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TabTitleComponent],
  exports: [TabTitleComponent]
})
export class TabModule { }
