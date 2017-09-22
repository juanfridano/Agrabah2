import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipeEditComponent} from './components/recipe-edit.component';
import {RecipeCreateComponent} from './components/recipe-create.component';
import {RecipeAllComponent} from './components/recipe-all.component';

const appRoutes: Routes = [
  {
    path: 'all',
    component: RecipeAllComponent
  },
  {
    path: 'create',
    component: RecipeCreateComponent
  },
  {
    path: 'edit',
    component: RecipeEditComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
