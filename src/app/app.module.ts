import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RecipeComponent } from './components/recipe.component';
import {RecipePreviewComponent} from './components/recipe-preview.component';
import {RecipeEditComponent} from './components/recipe-edit.component';
import {routing} from './app.routing';
import {RecipeCreateComponent} from './components/recipe-create.component';
import {RecipeAllComponent} from "./components/recipe-all.component";


@NgModule({
  declarations: [
    AppComponent,
    RecipeAllComponent,
    RecipeComponent,
    RecipePreviewComponent,
    RecipeCreateComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
