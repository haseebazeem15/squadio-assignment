import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentSuccessfullPage } from './payment-successfull.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentSuccessfullPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentSuccessfullPageRoutingModule {}
