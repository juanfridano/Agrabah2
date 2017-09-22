import { Component } from '@angular/core';
import {RecipesService} from '../services/recipes.service';
import {Recipe} from '../model/recipe';


@Component({
  moduleId: module.id,
  selector: 'recipe-all',
  template: `  <h3>Recipes</h3>
  <div *ngFor="let recipe of recipes">
  <recipe-preview [recipe]="recipe"></recipe-preview>
    </div>`,
  // styleUrls: ['../app.component.css'],
  providers: [RecipesService]
})

export class RecipeAllComponent {
  recipes: Array<Recipe> ;
  constructor(private recipesService: RecipesService) {
    this.recipesService.getRecipes().subscribe(result => {
    this.recipes = result;
  });
  }
}
