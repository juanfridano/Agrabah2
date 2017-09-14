import { Component } from '@angular/core';
import { Recipie } from './model/recipie';

import { RecipiesService } from './services/recipies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipiesService]
})

export class AppComponent {
  title = 'app';
  recipie: Recipie;
  constructor(private recipiesService: RecipiesService) {
      this.recipiesService.getRecipie().subscribe(recipie => { 
      this.recipie = recipie;
  });
  }
}
