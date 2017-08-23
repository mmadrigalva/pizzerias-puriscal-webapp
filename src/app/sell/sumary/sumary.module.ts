import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumaryItemComponent } from './sumary-item.component';
import { SellService } from 'app/sell/sell.service';
import { SumaryComponent } from 'app/sell/sumary/sumary.component';

@NgModule({
  providers: [
    SellService
  ],
  imports: [
    CommonModule
  ],
  declarations: [SumaryItemComponent, SumaryComponent],
  exports: [SumaryComponent]
})
export class SumaryModule { }
