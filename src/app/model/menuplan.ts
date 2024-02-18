import {Food} from './food/food'

export class MenuPlan {
    date: Date;
    foods: Food[];

    constructor(date: Date, foods: Food[]) {
        this.date = date;
        this.foods = foods;
    }
}