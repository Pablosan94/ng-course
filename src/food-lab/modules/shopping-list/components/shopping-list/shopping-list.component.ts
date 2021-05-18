import { Component, OnInit } from '@angular/core';
import { IngredientModel } from "../../models/ingredient.model";

@Component({
  selector: 'food-lab-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [
    new IngredientModel('Apples', 5),
    new IngredientModel('Tomatoes', 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
