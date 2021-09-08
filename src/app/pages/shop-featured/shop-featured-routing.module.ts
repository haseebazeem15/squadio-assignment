import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopFeaturedPage } from './shop-featured.page';

const routes: Routes = [
  {
    path: '',
    component: ShopFeaturedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopFeaturedPageRoutingModule {}
