import { Component, OnInit } from '@angular/core';

import { Product } from './components/product/models/product.model';
import { CartList } from './components/cart/cart-list/models/cart-list.model';
import { CartItem } from './components/cart/cart-item/models/cart-item.model';

import { ProductService } from './components/product/product.service';
import { CartService } from './components/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, CartService]
})
export class AppComponent implements OnInit{

  title = 'app';
  name = "Angular Shop site";
  description = "Angular Test project";
  
  cartList : CartList;
  cartTotalPrice: number;

  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService, private cartService: CartService) { 
  }

  ngOnInit() : void{
    this.listProduct();
    this.cartList = this.cartService.getCart();
    this.cartTotalPrice = this.cartService.getTotalPrice();
  }

  private listProduct(): void{
    this.products = this.productService.listProduct();
  }

  private onSelect(product:Product){
    this.selectedProduct = product;
}

  private onAddProductToCartClcik(product:Product){
    this.cartService.addProduct(product.id);
    this.cartList = this.cartService.getCart();
    this.cartTotalPrice = this.cartService.getTotalPrice();
  }

  private onClearCartClcik() :void {
    this.cartService.clearCart();
    this.cartList = this.cartService.getCart();
    this.cartTotalPrice = this.cartService.getTotalPrice();
  }

  private onNotifyMainForm(list: CartList){
    this.cartService.updateCart(list);
    this.cartList = this.cartService.getCart();
    this.cartTotalPrice = this.cartService.getTotalPrice();
  }
}




