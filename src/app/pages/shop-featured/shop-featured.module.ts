import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopFeaturedPageRoutingModule } from './shop-featured-routing.module';

import { ShopFeaturedPage } from './shop-featured.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopFeaturedPageRoutingModule
  ],
  declarations: [ShopFeaturedPage]
})
export class ShopFeaturedPageModule {}
