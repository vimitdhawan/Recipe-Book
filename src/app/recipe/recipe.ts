import {Ingredient} from '../shared/ingredient';

export class Recipe {
    constructor (public name:String, public description:String, public imagePath:String, public ingredients:Ingredient[]){}
    
}
