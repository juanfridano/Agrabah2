import { Component } from '@angular/core';
import { Recipie } from '../model/recipie';

@Component({
  selector: 'recipie',
  template:'<h1> {{title}}</h1>'
})

export class RecipieComponent {
  title = 'app';

}