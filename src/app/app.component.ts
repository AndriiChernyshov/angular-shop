import { Component, OnInit } from '@angular/core';

import { Cart } from './components/cart/models/cart.model';
import { Product } from './components/product/models/product.model';

import { ProductService } from './components/product/product.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent implements OnInit{
  constructor(private productService: ProductService) { 
    
  }
  
  title = 'app';
  name = "Angular Shop site";
  description = "Angular Test project";
  price:number = 10;
  category: CategoryTypes = CategoryTypes.Good;
  isAvailable:boolean = true;

  equivalents: number[] = [41,42,43,46];
  ingredients: Array<string> = ["Not bad", "Good", "Wwwweee"];

  cart: Cart = {
    productIds: [],
    totalPrice: 0,
    discount: 0
  };

  products: Product[];
  selectedProduct: Product;

  listProduct(): void{
    this.products = this.productService.listProduct();
}

  onSelect(product:Product){
    console.log(product.name);
    this.selectedProduct = product;
}

  onAddProductToCartClcik(product:Product){
    this.cart.totalPrice = this.cart.totalPrice + product.price;
  }

  onClearCartClcik(){
    this.cart.totalPrice = 0;
  }

ngOnInit() : void{
  this.listProduct();
}

}

enum CategoryTypes{
  Good = 1,
  Bad,
  Ugly    
}




