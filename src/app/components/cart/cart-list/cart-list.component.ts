import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

import { CartItem } from '../cart-item/models/cart-item.model';
import { CartList } from './models/cart-list.model';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  providers: [CartService],
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnChanges {
  public totalPrice : number;

  @Input() cartList: CartList;
  @Output() notifyMainForm: EventEmitter<CartList> = new EventEmitter<CartList>();

  constructor(private cartService: CartService) { }

  ngOnInit() {
    console.log('car-list on init');
    this.totalPrice = this.cartService.getTotalPrice();
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log("on chnages hook");
  }

  onNotifyCarList(item: CartItem)
  {
    console.log("onNotifyCarList " + item.productId);
    console.log(this.cartList.cartItems);
    if(this.cartList && this.cartList.cartItems)
    {
      for(var i = 0; i < this.cartList.cartItems.length; i++)  
      {
        if(item.productId == this.cartList.cartItems[i].productId)
        {
          this.cartList.cartItems[i].qty = 0;
        }
      }
    }
    this.notifyMainForm.emit(this.cartList);
  }
 
}
