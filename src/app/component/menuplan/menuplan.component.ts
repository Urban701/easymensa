import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common'
import { FoodComponent } from '../food/food.component';
import { MenuPlanService } from '../../service/menu-plan.service';
import { MenuPlan } from '../../model/menuplan';

@Component({
  selector: 'app-menuplan',
  standalone: true,
  imports: [FoodComponent,CommonModule],
  templateUrl: './menuplan.component.html',
  styleUrl: './menuplan.component.css'
})
export class MenuplanComponent implements OnInit{
  menuPlanList?: MenuPlan[]

  constructor(private menuplanSerice: MenuPlanService){}

  ngOnInit(): void {
    this.menuPlanList = this.menuplanSerice.getExampleMenuPlan();
    
  }

}
