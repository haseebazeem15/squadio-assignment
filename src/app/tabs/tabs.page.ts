import { Component } from '@angular/core';
import { CartService } from '../global/services/cart/cart.service';
import { WishlistService } from '../global/services/wishlist/wishlist.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor(
    public cartService: CartService,
    public wishlistService: WishlistService
  ) {}
}
