import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import{FoodComponent} from './food/food.component';
import{AboutComponent} from './about/about.component';

@NgModule({
    imports: [
    RouterModule.forRoot([
         { path: 'food', component: FoodComponent },
         { path: 'about', component: AboutComponent }

    ],{preloadingStrategy:PreloadAllModules})
  ],
  exports:[RouterModule]
 })
export class AppRoutingModule {}
