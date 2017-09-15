import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Recipe} from '../model/recipe';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class RecipesService {
  url= 'http://localhost:8082/postr';
    constructor(private http: Http) {

    }

    getRecipe(): Promise<Recipe> {
        return this.http.get('http://localhost:8082')
            .map((res) => res.json()).toPromise()
          .catch(this.handleErrorPromise);
    }

   addRecipe(recipe: Recipe): Promise<Recipe> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.set('Access-Control-Allow-Origin', '*');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, recipe, options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
