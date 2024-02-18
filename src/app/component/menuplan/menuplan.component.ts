import { Component } from '@angular/core';
import { FoodComponent } from '../food/food.component';

@Component({
  selector: 'app-menuplan',
  standalone: true,
  imports: [FoodComponent],
  templateUrl: './menuplan.component.html',
  styleUrl: './menuplan.component.css'
})
export class MenuplanComponent {

}
