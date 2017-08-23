import { Category } from 'app/models/category';
import { SubCategory } from 'app/models/sub-category';

export class Order {
  private lines = new Array<Category>();
  private comments = new Array<string>();
  constructor(
  ) {

  }
  public total(): number {
    let result = 0;
    this.lines.forEach((line: Category) => {
      result += line.getTotal();
    });
    return result;
  }
  private clearCategory(category: Category): Array<SubCategory> {
    return category.subCategories.filter((subCategory: SubCategory) => subCategory.selected);
  }
  public addLine(category: Category) {
    const line = Category.copy(category);
    line.subCategories = this.clearCategory(line);
    this.lines.push(line);
  }
  public setComment(comment: string) {
    this.comments.push(comment);
  }
  public getLines(): Array<Category> {
    return this.lines;
  }
}
