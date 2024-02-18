import { Injectable } from '@angular/core';
import { MenuPlan } from '../model/menuplan';
import { Food } from '../model/food/food';
import { Allergens } from '../model/food/allergens';

@Injectable({
  providedIn: 'root'
})
export class MenuPlanService {

  constructor() { }

  getExampleMenuPlan(): MenuPlan[] {

    let allergens: Allergens[] =  [new Allergens('Nüsse','Nüssalergie','N')]
   
    let food1 :Food = new Food(
      "assets/img/schnitzel.jpg",
      "Schnitzel",
      "Saftiger Schnitzel mit Kartoffelsalat",
      "meat",
      allergens
    )
    let food2 :Food = new Food(
      "assets/img/doner.jpg",
      "Kebab",
      "Kebab mit Reis",
      "meat",
      allergens
    )
    let foods: Food[] = [food1, food2];

    let menuplan: MenuPlan = new MenuPlan(new Date(), foods)
    let tommorow = new Date()
    tommorow.setDate(tommorow.getDate() + 1);
    let menuplan2: MenuPlan = new MenuPlan(tommorow, foods)
      
    return [menuplan, menuplan2];
  }
}
