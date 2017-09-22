import {Component, Input} from '@angular/core';
import { Recipe } from '../model/recipe';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'recipe-preview',
  templateUrl: './recipe-preview.component.html'
})

export class RecipePreviewComponent {
  @Input() recipe: Recipe;
}
