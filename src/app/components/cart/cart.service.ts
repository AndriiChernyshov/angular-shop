import { Injectable } from '@angular/core';

import { CartItem } from './cart-item/models/cart-item.model';
import { CartList } from './cart-list/models/cart-list.model';

import { ProductService } from '../../components/product/product.service';

@Injectable()
export class CartService {
  public cartList: CartList;

  constructor(private productService: ProductService) { 
    this.cartList = { cartItems: [ new CartItem(1, 42, true)], name: 'ZZZ' };
  }

  addProduct(productId : number){
    var cartItem:CartItem = null;
     for(var i = 0; i < this.cartList.cartItems.length; i++)  
      {
          if(this.cartList.cartItems[i].productId == productId)
          {
            cartItem = this.cartList.cartItems[i];
          }
      }
      if(cartItem == null)
      {
        this.cartList.cartItems.push(new CartItem(productId, 1, false));
      }
      else
      {
        cartItem.qty += 1;
      }
  }

  getCart() : CartList{
    console.log('getCart');
    if(this.cartList == null)
      return new CartList();
    return this.cartList;
  }

  clearCart() : void{
    this.cartList = new CartList();
  }

  updateCart(updatedCart:CartList) : void{
    console.log('updateCart');
    this.cartList = updatedCart;

  }

  getTotalPrice() : number{
    console.log('getTotalPrice');
    let totalPrice:number = 0;
    if(this.cartList && this.cartList.cartItems)
    {
      console.log(this.cartList.cartItems);
      for(var i = 0; i < this.cartList.cartItems.length; i++)  
      {
        var cartItem = this.cartList.cartItems[i];
        var product = this.productService.findProductById(cartItem.productId);

        if(product)
        {
          totalPrice += cartItem.qty * product.price;
          console.log(product);
          console.log(cartItem);
          console.log(totalPrice);
        }
      }
    }
    return totalPrice;
  }
}
