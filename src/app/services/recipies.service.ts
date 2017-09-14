import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RecipiesService {
    constructor(private http: Http) {

    }

    getRecipie() {
        return this.http.get('http://localhost:8082')
            .map(res => res.json());
    }
}