import { SubCategory } from 'app/models/sub-category';

export class Category {
  public static copy(category: Category) {
    return new Category(category.title, category.subCategories, category.selected);
  }
  constructor(
    public title: string,
    public subCategories: Array<SubCategory>,
    public selected = false
  ) {

  }
  public getTotal() {
    let result = 0;
    this.subCategories.filter((subCategory: SubCategory) => subCategory.selected).forEach((subCategory: SubCategory) => {
      result += subCategory.price;
    });
    return result;
  }
}
