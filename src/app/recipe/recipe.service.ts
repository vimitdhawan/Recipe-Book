import { Injectable } from '@angular/core';
import{ Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {

  private recipes:Recipe [] =[
    new Recipe('Fish Tikka', 'made of fish','http://www.chileunderground.com/wp-content/uploads/2011/08/RoastFishA.png',[
      new Ingredient('French Fries', 2), new Ingredient('peak meat', 3)
    ]),
    new Recipe('Fish Tikka', 'made of fish','http://www.chileunderground.com/wp-content/uploads/2011/08/RoastFishA.png',[])
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

}
