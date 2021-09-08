import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {

  baseUrl;
  @Input('citem') citem;
  @Output('onClick') onClick = new EventEmitter<any>();
  @Output('onRemove') onRemove = new EventEmitter<any>();
  @Output('onAddClick') onAddClick = new EventEmitter<any>();
  @Output('onMinusClick') onMinusClick = new EventEmitter<any>();


  constructor() {
   }

  ngOnInit() {
    console.log('cart item is', this.citem);
  }

  emitClick() {
    // this.onClick.emit();
  }

  emitRemove() {
    // this.onRemove.emit();
  }
  emitAdd() {
    // this.onAddClick.emit();
  }
  emitMinus() {
    // this.onMinusClick.emit();
  }

}
