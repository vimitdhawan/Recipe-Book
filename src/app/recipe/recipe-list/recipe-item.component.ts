import { Component, OnInit, Input } from '@angular/core';
import{Recipe} from '../recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() public recipe :Recipe;
  public recipeId:number;

  constructor() { }

  ngOnInit() {
  }

}
