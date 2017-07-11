import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

import { CartItem } from '../cart-item/models/cart-item.model';
import { CartList } from './models/cart-list.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnChanges {
  
  @Input() cartList: CartList;
  @Input() totalPrice: number;
  @Output() notifyMainForm: EventEmitter<CartList> = new EventEmitter<CartList>();

  constructor() { }

  ngOnInit() {
    console.log('onInit: car-list:');
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log("ngOnChanges: car-list");
  }

  onNotifyCarListRemoveProduct(item: CartItem)
  {
    console.log("onNotifyCarList " + item.productId);
    if(this.cartList && this.cartList.cartItems)
    {
      for(var i = 0; i < this.cartList.cartItems.length; i++)  
      {
        if(item.productId == this.cartList.cartItems[i].productId)
        {
          this.cartList.cartItems.splice(i, 1);
        }
      }
    }
    this.notifyMainForm.emit(this.cartList);
  }
}
