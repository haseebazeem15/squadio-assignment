import { Component, OnInit } from '@angular/core';
import { CartService } from '../global/services/cart/cart.service';
import { DiscountPipe } from '../global/pipes/dicountPipe/discount.pipe';
import { AlertService } from '../global/services/alert/alert.service';
import { NavController } from '@ionic/angular';
import { LoaderService } from '../global/services/loader/loader.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  constructor(
    public cartService: CartService,
    private alertService: AlertService,
    private navCtrl: NavController,
    private loader: LoaderService
  ) {}

  ngOnInit(): void {
    this.cartService.loadCart();
  }

  checkout() {
    this.loader.presentProcessingLoading();
    setTimeout(() => {
      this.loader.dismissLoader();
      this.alertService.presentAlert(
        'Order Placed!',
        'Your Order has been placed. Thanks for shopping with us'
      );
      this.cartService.resetCart();
      this.navCtrl.navigateForward('tabs/tab1');
    }, 3000);
  }
}
