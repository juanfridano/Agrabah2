import { Component } from '@angular/core';
import { Recipe } from './model/recipe';

import { RecipesService } from './services/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipesService]
})

export class AppComponent {
  recipe: Recipe ;
  constructor(private recipesService: RecipesService) {
    this.recipe = new Recipe();
    this.recipesService.getRecipe().then(result => {
    this.recipe = result;
  });
  }
  addRecipe(): void {
    this.recipesService.addRecipe(this.recipe);
  }
}
