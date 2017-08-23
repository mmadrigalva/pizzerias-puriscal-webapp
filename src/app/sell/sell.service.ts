import { Injectable } from '@angular/core';
import { TabHeader } from 'app/models/tab-header';
import { Category } from 'app/models/category';
import { SubCategory } from 'app/models/sub-category';
import { Order } from 'app/models/order';

@Injectable()
export class SellService {
  private selectedTab: TabHeader;
  private order = new Order();
  constructor() { }
  public setSelectedTab(tab: TabHeader) {
    this.selectedTab = tab;
  }
  public getSelectedTab() {
    return this.selectedTab;
  }
  public generateLine(category: Category) {
    this.order.addLine(category);
    console.log(this.order);
    console.log(this.order.total());
  }
  public getOrder(): Order {
    return this.order;
  }
}
