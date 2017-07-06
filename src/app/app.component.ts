import { Component } from '@angular/core';

import { Cart } from './components/cart/models/cart.model';
import { Product } from './components/product/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  products = PRODUCTS;
  selectedProduct: Product;

onSelect(product:Product){
  console.log(product.name);
  this.selectedProduct = product;
}
}

enum CategoryTypes{
  Good = 1,
  Bad,
  Ugly    
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'Bread', price: 1.0},
  { id: 2, name: 'Milk', price: 2.0},
  { id: 3, name: 'Beer', price: 2.5},
]


