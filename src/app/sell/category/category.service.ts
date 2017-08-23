import { Injectable } from '@angular/core';
import { Category } from 'app/models/category';
import { SubCategory } from 'app/models/sub-category';
import { SubCategoryTag } from 'app/models/sub-category-tag';

@Injectable()
export class CategoryService {
  categories: Array<Category>
  constructor() { }
  getCategories(): Array<Category> {
    this.categories = this.mockCategories();
    return this.categories;
  }
  private mockCategories(): Array<Category> {
    const result = [
      new Category('Pizza',
        [
          new SubCategory(1, 'Familiar', 12500, new SubCategoryTag(1, 1, 'Tamaños')),
          new SubCategory(2, 'Extragrande', 10500, new SubCategoryTag(1, 1, 'Tamaños')),
          new SubCategory(3, 'Grande', 8000, new SubCategoryTag(1, 1, 'Tamaños')),
          new SubCategory(4, 'Mediana', 7000, new SubCategoryTag(1, 1, 'Tamaños')),
          new SubCategory(5, 'Pequeña', 6000, new SubCategoryTag(1, 1, 'Tamaños')),
          new SubCategory(6, 'Personal', 1400, new SubCategoryTag(1, 1, 'Tamaños')),
          new SubCategory(7, 'Jamón y Queso', 0, new SubCategoryTag(2, 2, 'Sabores')),
          new SubCategory(8, 'Solo carnes', 500, new SubCategoryTag(2, 2, 'Sabores')),
          new SubCategory(9, 'Hawaiana', 0, new SubCategoryTag(2, 2, 'Sabores')),
          new SubCategory(10, 'Canadiense', 0, new SubCategoryTag(2, 2, 'Sabores'))
        ]
      ),
      new Category('Burrito',
        [
          new SubCategory(11, 'Especial', 1700, new SubCategoryTag(3, 1, 'Variedades')),
          new SubCategory(12, 'Especial con papas', 2200, new SubCategoryTag(3, 1, 'Variedades'))
        ]
      ),
      new Category('Hamburguesas',
        [
          new SubCategory(13, 'Especial', 1000, new SubCategoryTag(3, 1, 'Variedades')),
          new SubCategory(14, 'Especial con papas', 2200, new SubCategoryTag(3, 1, 'Variedades'))
        ]
      ),
      new Category('Tacos',
        [
          new SubCategory(15, 'Orden de 2', 1000, new SubCategoryTag(3, 1, 'Variedades'))
        ]
      ),
      new Category('Papas',
        [
          new SubCategory(16, 'Orden', 1700, new SubCategoryTag(3, 1, 'Variedades'))
        ]
      ),
      new Category('Pasta',
        [
          new SubCategory(17, 'Spaguetty', 2500, new SubCategoryTag(3, 1, 'Variedades')),
          new SubCategory(18, 'Lagsaña', 2500, new SubCategoryTag(3, 1, 'Variedades')),
        ]
      ),
      new Category('Calzone',
        [
          new SubCategory(19, 'Regular', 2700, new SubCategoryTag(3, 1, 'Variedades'))
        ]
      ),
      new Category('Bechamela',
        [
          new SubCategory(20, 'Supremo', 2500, new SubCategoryTag(3, 1, 'Variedades'))
        ]
      ),
      new Category('Refresco',
        [
          new SubCategory(21, '2.5 litros', 2000, new SubCategoryTag(6, 1, 'Gaseosos')),
          new SubCategory(26, '500 ml', 2000, new SubCategoryTag(6, 1, 'Gaseosos')),
          new SubCategory(27, '2.5 litros', 2000, new SubCategoryTag(5, 1, 'Naturales')),
          new SubCategory(28, '500 ml', 2000, new SubCategoryTag(5, 1, 'Naturales'))
        ]
      ),
      new Category('Extras',
        [
          new SubCategory(22, 'Empaque', 200, new SubCategoryTag(3, 1, 'Variedades'))
        ]
      ),
      new Category('Casados',
        [
          new SubCategory(23, 'Con res', 2500, new SubCategoryTag(4, 1, 'Almuerzos')),
          new SubCategory(24, 'Con pescado', 2500, new SubCategoryTag(4, 1, 'Almuerzos')),
          new SubCategory(25, 'Con pollo', 2500, new SubCategoryTag(4, 1, 'Almuerzos')),
          new SubCategory(25, 'Con cerdo', 2500, new SubCategoryTag(4, 1, 'Almuerzos'))
        ]
      )
    ]
    return result;
  }
}
