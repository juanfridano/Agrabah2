import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Recipe} from '../model/recipe';
import {ActivatedRoute} from '@angular/router';

import {RecipesService} from '../services/recipes.service';
import {Ingredient} from '../model/ingredient';
import {Item} from '../model/item';
import {CategoryType} from '../model/categoryType';
import {Category} from '../model/category';

@Component({
  moduleId: module.id,
  selector: 'recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  @Input() recipe: Recipe;
  @Input() newIngredient: Ingredient;
  itemList: Array<Item>;
  categoryList: Array<Category>;
  selectedItem: Item;
  addANewItem: boolean;
  addANewCategory: boolean;
  @Input() selectedType: CategoryType;
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute, private recipesService: RecipesService) {
    this.recipe = new Recipe();
    this.recipe.ingredients = new Array<Ingredient>();
    this.recipe.steps = new Array<String>();
    this.newIngredient = new Ingredient();
    this.addANewItem = false;
    this.addANewCategory = false;
    this.getItems();
    this.getCategories();
    this.selectedType = CategoryType.COURSE;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.getEntity();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getEntity(): void {
    this.recipesService.getRecipe(this.id).subscribe((result) => {
      this.recipe = result;
    });
  }
  addRecipe(recipe: Recipe): void {
    this.recipesService.updateRecipe(recipe).subscribe();
  }

  addStep(newStep: string): void {
    if (newStep) {
      this.recipe.steps.push(newStep);
    }
  }

  addIngredient() {
    this.newIngredient.item = this.selectedItem;
    this.recipe.ingredients.push(this.newIngredient);
    this.newIngredient = new Ingredient();
    this.selectedItem = new Item(null, 'selectItem');
    this.getItems();
  }

  getItems() {
    this.recipesService.getItems().subscribe(result => {
      this.itemList = result;
    });
  }
  addItem(itemName: string): void {
    this.recipesService.addItem(new Item(null, itemName)).subscribe();
  }
  toggleNewItem(): void {
    if (this.addANewItem) {
      this.addANewItem = false;
    } else {
      this.addANewItem = true;
    }
  }
  getCategories() {
    this.recipesService.getCategories().subscribe(result => {
      this.categoryList = result;
    });
  }
  addCategory(categoryName: string, type: CategoryType): void {
    this.recipesService.addCategory(new Category(null, categoryName, type)).subscribe();
  }
  toggleNewCategory(): void {
    if (this.addANewCategory) {
      this.addANewCategory = false;
    } else {
      this.addANewCategory = true;
    }
  }
}
