import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  constructor() { }

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test',
      'Just a Test',
      'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/81c27c52ff3a42a9a278441e67b89348/BFV38655_5GarlicBreadRecipes_FB.jpg'
    ),
    new Recipe('Test 2',
      'Just a Test 2',
      'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/81c27c52ff3a42a9a278441e67b89348/BFV38655_5GarlicBreadRecipes_FB.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
