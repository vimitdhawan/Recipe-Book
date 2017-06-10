import { Injectable } from '@angular/core';
import{Recipe} from './recipe';

@Injectable()
export class RecipeService {

  private recipes:Recipe [] =[
    new Recipe('Fish Tikka', 'made of fish','http://www.chileunderground.com/wp-content/uploads/2011/08/RoastFishA.png',[]),
    new Recipe('Fish Tikka', 'made of fish','http://www.chileunderground.com/wp-content/uploads/2011/08/RoastFishA.png',[])
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

}
