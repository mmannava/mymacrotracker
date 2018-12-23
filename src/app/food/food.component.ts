import { Component, OnInit } from '@angular/core';
import{FoodService} from './food.service';
import  {Food}from './food';
import {clone} from 'lodash';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  foods:Food[];
  foodForm:boolean=false;
  isNewFood:boolean;
  newFood:any={};
  editFoodForm:boolean=false;
  editedFood:any={};
  constructor(private foodService:FoodService) { }

  ngOnInit() {
    this.getFoods();
  }
  getFoods=function(){
    this.foods=this.foodService.getFoodsFromData();
  }

  showEditFoodForm(food:Food){
    if(!food){
      this.foodForm=false;
      return;
    }
    this.editFoodForm=true;
    this.editedFood=clone(food);


  }
  showAddFoodForm(){

    // resets form if edited user
    if(this.foods.length){
      this.newFood={};
    }
    this.foodForm=true;
    this.isNewFood=true;

  }
  saveFood=function(food:Food){
    if(this.isNewFood){
      //add a new food
      this.foodService.addFood(food);
    }
    this.foodForm=false;
  }
  updateFood(){
    this.foodService.updateFood(this.editedFood);
    this.editFoodForm=false;
    this.editedFood={};
  }

  removeFood(food:Food){
    this.foodService.deleteFood(food);
  }
  cancelEdits(){
    this.editedFood={};
    this.editFoodForm=false;
  }

  cancelNewFood(){
    this.newFood={};
    this.foodForm=false;
  }
}
