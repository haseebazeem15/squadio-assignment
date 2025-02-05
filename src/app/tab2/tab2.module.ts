import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { PipesModule } from '../global/pipes/pipes.module';
import { CartItemComponent } from '../components/cart-item/cart-item.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    PipesModule,
  ],
  declarations: [Tab2Page, CartItemComponent],
})
export class Tab2PageModule {}
