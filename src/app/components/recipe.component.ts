import {Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../model/recipe';
import {ActivatedRoute} from '@angular/router';
import {RecipesService} from '../services/recipes.service';

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html'
})

export class RecipeComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  recipe: Recipe;
  constructor(private route: ActivatedRoute, private recipesService: RecipesService) {
    this.recipe = new Recipe();
  }
  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.getEntity();
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getEntity(){
    this.recipesService.getRecipe(this.id).subscribe((result) => {
      this.recipe = result;
    });
  }

}
