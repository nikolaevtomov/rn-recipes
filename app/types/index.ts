import {FILTER_ENUM} from '../reducers/filters';

export interface CategoryProp {
  id: string;
  name: string;
  color: string;
}

export interface RecipeProps {
  id: string;
  categoryIds: Array<string>;
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingredients: Array<string>;
  steps: Array<string>;
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
}

export interface StoreState {
  categories: Array<CategoryProp>;
  favorites: Array<string>;
  recipes: Array<RecipeProps>;
  filters: Array<FILTER_ENUM>;
}
