import { Component, Input} from '@angular/core' 
import { CommonModule} from '@angular/common' 
import { Food } from '../../model/food/food'


@Component({
  selector: 'app-food',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})


export class FoodComponent {
  @Input() foodList?: Food[];
}
