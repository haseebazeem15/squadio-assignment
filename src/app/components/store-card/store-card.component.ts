import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StorageKeys } from 'src/app/global/enums/storage-keys.enum';
import { Course } from 'src/app/global/interfaces/course.interface';
import { CartService } from 'src/app/global/services/cart/cart.service';
import { StorageService } from 'src/app/global/services/storage/storage.service';
import { ToastService } from 'src/app/global/services/toast/toast.service';
import { WishlistService } from 'src/app/global/services/wishlist/wishlist.service';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss'],
})
export class StoreCardComponent implements OnInit {
  @Input() course: Course;
  @Input() isFeatured: boolean;
  @Input() photo: any;

  constructor(
    private storage: StorageService,
    private toastService: ToastService,
    public wishlistService: WishlistService
  ) {}

  ngOnInit() {}
}
