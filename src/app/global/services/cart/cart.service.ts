import { Injectable } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { StorageService } from '../storage/storage.service';
import { AlertService } from '../alert/alert.service';
import { ToastService } from '../toast/toast.service';
import { StorageKeys } from '../../enums/storage-keys.enum';
import { DiscountPipe } from '../../pipes/dicountPipe/discount.pipe';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cart: Course[];
  totalPrice: number = 0;
  totalSavings: number = 0;

  constructor(
    private storage: StorageService,
    private alertService: AlertService,
    private toastService: ToastService
  ) {}

  addToCart(course: Course) {
    if (!this.isCourseExistsInCart(course.id)) {
      this.cart.push(course);
      this.storage.saveObj(StorageKeys.CART_KEY, this.cart);
      this.alertService.presentAlert(
        'Added to Cart',
        `'${course.courseName}' added into your cart`
      );
    } else {
      this.alertService.presentAlert(
        'Already Exists',
        `This course '${course.courseName}' is already exist in cart. Please check your cart!`
      );
    }
    this.loadCart();
  }

  loadCart() {
    this.cart = this.storage.getObj(StorageKeys.CART_KEY) || [];
    this.updateTotalPrice();
  }

  resetCart() {
    this.cart = [];
    this.storage.saveObj(StorageKeys.CART_KEY, this.cart);
  }

  deleteFromCart(courseID: number) {
    if (this.isCourseExistsInCart(courseID)) {
      this.cart.splice(this.getCourseIndexFromCart(courseID), 1);
      this.storage.saveObj(StorageKeys.CART_KEY, this.cart);
      this.alertService.presentAlert(
        'Course Removed!',
        'Course has been deleted from your cart'
      );
    } else {
      this.alertService.presentAlert(
        'Course not Exists!',
        `This course doesnt exist in your cart or already deleted`
      );
    }
    this.loadCart();
  }

  isCourseExistsInCart(courseId: number): boolean {
    this.loadCart();
    return this.getCourseIndexFromCart(courseId) > -1;
  }

  getCourseIndexFromCart(courseId: number) {
    return this.cart.findIndex((item) => item.id === courseId);
  }

  updateTotalPrice() {
    const dicountPipe = new DiscountPipe();
    this.totalPrice = this.cart.reduce(
      (acc, curr) =>
        acc +
        Number(
          dicountPipe.transform(curr.actualPrice, curr.discountPercentage)
        ),
      0
    );
    const totalSum = this.cart.reduce(
      (acc, curr) => acc + Number(curr.actualPrice.slice(1)),
      0
    );
    this.totalSavings = totalSum - this.totalPrice;
  }
}
