import { SubCategoryTag } from 'app/models/sub-category-tag';
export class SubCategory {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public tag: SubCategoryTag,
    public selected = false
  ) {

  }
}
