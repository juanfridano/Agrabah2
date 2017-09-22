import {Component, Input} from '@angular/core';
import {Recipe} from '../model/recipe';

import {RecipesService} from '../services/recipes.service';
import {Ingredient} from '../model/ingredient';
import {Item} from '../model/item';

@Component({
  moduleId: module.id,
  selector: 'recipe-edit',
  templateUrl: './recipe-edit.component.html'
})


export class RecipeEditComponent {
  @Input() recipe: Recipe;
  @Input() newIngredient: Ingredient;
  itemList: Array<Item>;
  constructor(private recipesService: RecipesService) {
    this.newIngredient = new Ingredient();

    this.recipesService.getItems().subscribe(result => {
      this.itemList = result;
    });
  }

  addRecipe(recipe: Recipe): void {
    this.recipesService.addRecipe(recipe).subscribe();
  }

  addItem(item: Item): void {
    this.recipesService.addItem(item).subscribe();
  }

  addStep(newStep: string) {
    if (newStep) {
      this.recipe.steps.push(newStep);
    }
  }

  addIngredient() {
    this.recipe.ingredients.push(this.newIngredient);
    this.newIngredient = new Ingredient();
  }

  addNewItem(itemName: string) {
    this.addItem(new Item(null, itemName));
  }
}
