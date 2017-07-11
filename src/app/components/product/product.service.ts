import { Injectable } from '@angular/core';

import { Product } from './models/product.model'

const PRODUCTS: Product[] = [
  { id: 1, name: 'Bread', price: 1.0},
  { id: 2, name: 'Milk', price: 2.0},
  { id: 3, name: 'Beer', price: 2.5}
]


@Injectable()
export class ProductService {

  constructor() { }

  public listProduct(): Product[]{
    return PRODUCTS;
  }

  public findProductById(id:number): Product{
     for(var i = 0; i < PRODUCTS.length; i++)  
      {
          if(PRODUCTS[i].id == id)
            return PRODUCTS[i];
      }
      return null;
  }
}
