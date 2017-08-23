import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'app/sell/category/category.service';
import { Category } from 'app/models/category';
import { TabHeader, TabHeaderType } from 'app/models/tab-header';
import { SubCategory } from 'app/models/sub-category';
import { OptionStyle } from 'app/sell/tab/tab-title.component';
import { SellService } from 'app/sell/sell.service';

@Component({
  selector: 'sell-index',
  templateUrl: './sell-index.component.html',
  styleUrls: ['./sell-index.component.scss']
})
export class SellIndexComponent implements OnInit {
  categories: Array<Category>;
  tabs = [
    new TabHeader(0, 'Productos', TabHeaderType.Category)
  ];
  drawingCategories = false;
  selectedCategory: Category;
  selectedTab: TabHeader;
  optionStyle = OptionStyle;
  constructor(private router: Router, private categoryService: CategoryService, private sellService: SellService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    this.drawingCategories = true;
    this.setSelectedTab(this.tabs[0]);
  }
  goToHome() {
    this.router.navigate(['home']);
  }
  setSelectedTab(tab: TabHeader) {
    this.selectedTab = tab;
    this.sellService.setSelectedTab(tab);
  }
  selectTab(tab: TabHeader) {
    this.setSelectedTab(tab);
    this.cleanTabs();
    this.drawingCategories = this.selectedTab.type === TabHeaderType.Category
  }
  cleanTabs() {
    if (this.selectedTab.type === TabHeaderType.Category) {
      this.tabs = [
        new TabHeader(0, 'Productos', TabHeaderType.Category)
      ];
      this.drawingCategories = true;
    }
  }
  selectCategory(category: Category) {
    this.cleanTabs();
    category.selected = true;
    this.selectedCategory = category;
    this.selectedCategory.subCategories.forEach((subCategory: SubCategory) => {
      let exists = false;
      this.tabs.forEach((tab: TabHeader) => {
        if (subCategory.tag.id === tab.id) {
          exists = true;
        }
      });
      if (!exists) {
        this.tabs.push(new TabHeader(subCategory.tag.id, subCategory.tag.title, TabHeaderType.SubCategory));
      }
    });
    if (this.drawingCategories) {
      this.setSelectedTab(this.tabs[1]);
      this.drawingCategories = false;
    }
  }
  selectSubCategory(subCategory: SubCategory) {
    var subCategoryInCategory = this.selectedCategory.subCategories.find((sub: SubCategory) => sub.id === subCategory.id);
    subCategoryInCategory.selected = true;
    var newTab = this.tabs.findIndex((tab: TabHeader) => tab.id === subCategory.tag.id) + 1;
    if (newTab < this.tabs.length) {
      this.setSelectedTab(this.tabs[newTab]);
    } else {
      this.categories = this.categoryService.getCategories();
      this.sellService.generateLine(this.selectedCategory);
      this.setSelectedTab(this.tabs[0]);
      this.cleanTabs();
    }
  }
  getContentForSubCategory() {
    const result = new Array<SubCategory>();
    this.selectedCategory.subCategories.forEach((subCategory: SubCategory) => {
      if (this.selectedTab.title === subCategory.tag.title) {
        result.push(subCategory);
      }
    });
    return result;
  }
}
