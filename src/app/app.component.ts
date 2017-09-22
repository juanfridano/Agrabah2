import { Component } from '@angular/core';
import { Recipe } from './model/recipe';

import { RecipesService } from './services/recipes.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipesService]
})

export class AppComponent {

}
