import { Injectable } from '@angular/core';

import { CartItem } from './cart-item/models/cart-item.model';
import { CartList } from './cart-list/models/cart-list.model';

import { ProductService } from '../../components/product/product.service';

@Injectable()
export class CartService {
  public cartList: CartList;

  constructor(private productService: ProductService) { 
    this.cartList = { cartItems: [ new CartItem(1, 42, true)]};
  }

  public addProduct(productId : number){
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

  public getCart() : CartList{
    console.log('getCart');
    if(this.cartList == null)
      return new CartList();
    return this.cartList;
  }

  public clearCart() : void{
    this.cartList = new CartList();
    this.cartList.cartItems = [];
  }

  public updateCart(updatedCart:CartList) : void{
    console.log('updateCart');
    this.cartList = updatedCart;

  }

  public getTotalPrice() : number{
    console.log('getTotalPrice');
    let totalPrice:number = 0;
    if(this.cartList && this.cartList.cartItems)
    {
      for(var i = 0; i < this.cartList.cartItems.length; i++)  
      {
        var cartItem = this.cartList.cartItems[i];
        var product = this.productService.findProductById(cartItem.productId);

        if(product)
        {
          totalPrice += cartItem.qty * product.price;
        }
      }
    }
    return totalPrice;
  }
}
