import {Component, Input} from '@angular/core';
import { Recipe } from '../model/recipe';

import { RecipesService } from '../services/recipes.service';
import {Ingredient} from '../model/ingredient';
import {Item} from '../model/item';

@Component({
  moduleId: module.id,
  selector: 'recipe-create',
  templateUrl: './recipe-edit.component.html'
})

export class RecipeCreateComponent {
  @Input() recipe: Recipe;
  @Input() newIngredient: Ingredient;
  itemList: Array<Item>;
  selectedItem: Item;
  addANewItem: boolean;
  constructor(private recipesService: RecipesService) {
    this.recipe = new Recipe();
    this.recipe.ingredients = new Array<Ingredient>();
    this.recipe.steps = new Array<String>();
    this.newIngredient = new Ingredient();
    this.addANewItem = false;
    this.getItems();
  }

  addRecipe(recipe: Recipe): void {
    this.recipesService.addRecipe(recipe).subscribe();
  }

  addIngredient() {
    this.newIngredient.item = this.selectedItem;
    this.recipe.ingredients.push(this.newIngredient);
    this.newIngredient = new Ingredient();
    this.selectedItem = new Item(null, 'selectItem');
    this.getItems();
  }

  addItem(item: Item): void {
    this.recipesService.addItem(item).subscribe();
  }
  addStep(newStep: string) {
    if (newStep) {
      this.recipe.steps.push(newStep);
    }
  }
  getItems() {
    this.recipesService.getItems().subscribe(result => {
      this.itemList = result;
    });
  }
  addNewItem(itemName: string) {
    this.addItem(new Item(null, itemName));
  }

  toggleNewItem() {
    if (this.addANewItem) {
      this.addANewItem = false;
    } else {
      this.addANewItem = true;
    }
  }

}
