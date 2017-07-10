import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { CartItem } from './models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;

  @Output() notifyCarListRemoveProduct: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  constructor() { }

  ngOnInit() {


  }

  onBtnRemoveClick(item){
    this.notifyCarListRemoveProduct.emit(item);
  }

}
