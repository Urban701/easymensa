import {Allergens} from './allergens'

type DietType =  "vegetarian" | "vegan" | "meat";

export class Food {
     imgSource: string;
     name: string;
     description: string;
     type: DietType; 
     allergens: Allergens [];


     constructor(
        imgSource: string,
        name: string,
        description: string,
        type: DietType,
        allergens: Allergens[]){
            this.imgSource = imgSource;
            this.name = name;
            this.description = description;
            this.type = type;
            this.allergens = allergens;
         }
}