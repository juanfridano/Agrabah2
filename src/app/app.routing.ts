import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipeEditComponent} from './components/recipe-edit.component';
import {RecipeCreateComponent} from './components/recipe-create.component';
import {RecipeAllComponent} from './components/recipe-all.component';
import {RecipeComponent} from "./components/recipe.component";

const appRoutes: Routes = [
  {
    path: 'recipe/all',
    component: RecipeAllComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeComponent
  },
  {
    path: 'recipe/create',
    component: RecipeCreateComponent
  },
  {
    path: 'recipe/edit/:id',
    component: RecipeEditComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
