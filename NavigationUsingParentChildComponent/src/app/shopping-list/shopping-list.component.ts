import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('apple', 2),
    new Ingredient('Orange', 4),
    // We can also pass data like this way
    // {name: 'apple', amount: 2},
    // {name: 'Orange', amount: 5},
    // {name: 'Banana', amount: 4}
  ]

  constructor() { }

  ngOnInit() {
  }

}
