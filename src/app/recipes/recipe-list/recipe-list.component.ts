import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test',
      'Just a Test',
      'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/81c27c52ff3a42a9a278441e67b89348/BFV38655_5GarlicBreadRecipes_FB.jpg'
    ),
    new Recipe('Test 2',
      'Just a Test 2',
      'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/81c27c52ff3a42a9a278441e67b89348/BFV38655_5GarlicBreadRecipes_FB.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
