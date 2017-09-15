import { Component } from '@angular/core';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'recipe',
  template:'<h1> {{title}}</h1>'
})

export class RecipeComponent {
  title = 'app';

}
