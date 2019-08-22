import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // Create a dummy recipe list 
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is sample test', 'https://static01.nyt.com/images/2017/09/27/dining/27KITCHENSAUSAGES1/27KITCHENSAUSAGES-articleLarge.jpg'),

    new Recipe('A another Recipe', 'This is another test', 'https://images-gmi-pmc.edge-generalmills.com/23bcd559-1e27-4c54-90a7-812690764c7f.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
