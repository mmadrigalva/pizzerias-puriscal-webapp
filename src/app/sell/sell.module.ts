import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellComponent } from './sell.component';
import { SellIndexComponent } from './sell-index/sell-index.component';
import { CategoryService } from 'app/sell/category/category.service';
import { TabModule } from 'app/sell/tab/tab.module';
import { SellService } from 'app/sell/sell.service';
import { SumaryModule } from 'app/sell/sumary/sumary.module';
@NgModule({
  providers: [CategoryService, SellService],
  imports: [
    CommonModule,
    TabModule,
    SumaryModule
  ],
  declarations: [SellComponent, SellIndexComponent],
  exports: [SellComponent]
})
export class SellModule { }
