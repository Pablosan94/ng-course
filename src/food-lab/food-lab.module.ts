import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodLabComponent } from "./food-lab.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RecipeBookModule } from "./modules/recipe-book/recipe-book.module";
import { ShoppingListModule } from "./modules/shopping-list/shopping-list.module";
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [FoodLabComponent, HeaderComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RecipeBookModule,
    ShoppingListModule
  ],
  bootstrap: [FoodLabComponent]
})
export class FoodLabModule { }
