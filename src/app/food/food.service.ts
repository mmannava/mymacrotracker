import { Injectable } from '@angular/core';
import  {Food} from './food';
import {FOODS} from './food-data';
import { findIndex } from 'lodash';
@Injectable()
export class FoodService {
  private ufoods=FOODS;

  getFoodsFromData():Food[]{
    console.log(this.ufoods);
    return this.ufoods;
  }

  addFood(food:Food){
    this.ufoods.push(food);
    console.log(this.ufoods);

  }
  updateFood(food:Food){
    let index=findIndex(this.ufoods,(u:Food)=>{
      return u.id=== food.id;
    })
    this.ufoods[index]=food;
  }
  deleteFood(food:Food){
    this.ufoods.splice(this.ufoods.indexOf(food),1);
    console.log(this.ufoods);
  }

  constructor() { }

}
