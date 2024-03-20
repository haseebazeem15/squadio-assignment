import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { AlertService } from '../alert/alert.service';
import { ToastService } from '../toast/toast.service';
import { Course } from '../../interfaces/course.interface';
import { StorageKeys } from '../../enums/storage-keys.enum';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  public wishlist: Course[];

  constructor(
    private storage: StorageService,
    private alertService: AlertService,
    private toastService: ToastService
  ) {}

  loadWishlist() {
    this.wishlist = this.storage.getObj('wishlist') || [];
    this.wishlist.reverse();
  }

  updateWishlist(course: Course) {
    if (this.isCourseExistsInWishlist(course)) {
      this.wishlist.splice(this.getCourseIndexFromWishlist(course), 1);
      this.toastService.show('Course removed from wishlist');
    } else {
      this.wishlist.push(course);
      this.toastService.show('Course added to wishlist');
    }
    this.storage.saveObj(StorageKeys.WISHLIST_KEY, this.wishlist);
    this.loadWishlist();
  }

  isCourseExistsInWishlist(course: Course): boolean {
    this.loadWishlist();
    return this.getCourseIndexFromWishlist(course) > -1;
  }

  getCourseIndexFromWishlist(course: Course) {
    return this.wishlist.findIndex((item) => item.id === course.id);
  }
}
