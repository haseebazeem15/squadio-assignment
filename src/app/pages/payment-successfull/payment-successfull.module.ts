import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentSuccessfullPageRoutingModule } from './payment-successfull-routing.module';

import { PaymentSuccessfullPage } from './payment-successfull.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentSuccessfullPageRoutingModule
  ],
  declarations: [PaymentSuccessfullPage]
})
export class PaymentSuccessfullPageModule {}
