import { Component } from '@angular/core';
import { RecipeService } from './recipe/recipe.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent {
  title = 'app works!';
}
