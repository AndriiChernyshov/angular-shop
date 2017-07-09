import { Injectable } from '@angular/core';

import { CartItem } from './cart-item/models/cart-item.model';
import { CartList } from './cart-list/models/cart-list.model';

@Injectable()
export class CartService {
  cartList: CartList;

  constructor() { 
    this.cartList = { cartItems: [ new CartItem(1, 10, true)], name: 'ZZZ' };
  }

  addProduct(productId : number){
    this.cartList.cartItems.push(new CartItem(productId, 1, false));
  }

  getCart() : CartList{
    return this.cartList;
  }
}
