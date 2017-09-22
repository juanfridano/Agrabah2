﻿import {Component, Input} from '@angular/core';
import { Recipe } from '../model/recipe';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html'
})

export class RecipeComponent {
  @Input() recipe: Recipe;
}
