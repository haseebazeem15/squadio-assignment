import { Component, OnInit } from '@angular/core';
import { Course } from '../global/interfaces/course.interface';
import { StorageService } from '../global/services/storage/storage.service';
import { CartService } from '../global/services/cart/cart.service';
import { WishlistService } from '../global/services/wishlist/wishlist.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  constructor(public wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.wishlistService.loadWishlist();
  }
}
