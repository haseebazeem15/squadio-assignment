import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/global/interfaces/course.interface';
import { AlertService } from 'src/app/global/services/alert/alert.service';
import { CartService } from 'src/app/global/services/cart/cart.service';
import { WishlistService } from 'src/app/global/services/wishlist/wishlist.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() course: Course;

  constructor(
    public cartService: CartService,
    private wishlist: WishlistService,
    private alertService: AlertService
  ) {}

  ngOnInit() {}

  moveToWishlist() {
    if (!this.wishlist.isCourseExistsInWishlist(this.course)) {
      this.wishlist.updateWishlist(this.course);
      this.cartService.deleteFromCart(this.course.id);
    } else {
      this.alertService.presentAlert(
        'Already Exists in Wishlist',
        'This course is already exists in wishlist'
      );
    }
  }
}
