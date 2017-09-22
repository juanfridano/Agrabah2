import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Recipe} from '../model/recipe';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Item} from "../model/item";


@Injectable()
export class RecipesService {
  constructor(private http: Http) {
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get('/api/recipes/all')
      .map((res: Response) => res.json());
    }

  getItems(): Observable<Item[]> {
    return this.http.get('/api/items/all')
      .map((res: Response) => res.json());
  }

  addRecipe(recipe: Recipe) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    const body = JSON.stringify(recipe);
    console.log(body);
    return this.http.post('/api/recipes/create', body, options).map((res: Response) => res.json());
  }

  addItem(item: Item) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    const body = JSON.stringify(item);
    console.log(body);
    return this.http.post('/api/items/create', body, options).map((res: Response) => res.json());
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
