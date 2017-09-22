import {Ingredient} from './ingredient';

export class Recipe {
    id: number;
    name: string;
  description: String;
  categories: Array<String>;
  steps: Array<String>;
  ingredients: Array<Ingredient>;

  constructor() {
  }
}
