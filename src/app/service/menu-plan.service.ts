import { Injectable } from '@angular/core';
import { MenuPlan } from '../model/menuplan';
import { Food } from '../model/food/food';
import { Allergens } from '../model/food/allergens';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiService } from './api.service';
import { ApiEndPointsV1 } from '../api/v1/endpoint';

@Injectable({
  providedIn: 'root'
})
export class MenuPlanService {

  data: any;

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getExampleMenuPlan(): MenuPlan[] {

    // this.http.get('http://localhost:5000/api/allergens').subscribe((response) => {
    //   // Die empfangenen Daten werden in der Variablen 'data' gespeichert
    //   this.data = response;
    //   console.log(this.data); // Protokolliert die empfangenen Daten
    // });

    let params = new HttpParams();

    this.apiService.get(`${ApiEndPointsV1.allergens}`, params).subscribe();

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
