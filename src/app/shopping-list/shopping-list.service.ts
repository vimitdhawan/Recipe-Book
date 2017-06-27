import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient'

@Injectable()
export class ShoppingListService {

    private items : Ingredient [] = [];

    constructor() { }

//get ingredients for shopping-list
  getItems () {
    return this.items;
  }
//add ingredients for shopping-list
  addItems (items : Ingredient[]) {
    Array.prototype.push.apply(this.items , items);
  }
}
