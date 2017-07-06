import { Injectable } from '@angular/core';

import { Product } from './models/product.model'

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Bread', price: 1.0},
  { id: 2, name: 'Milk', price: 2.0},
  { id: 3, name: 'Beer', price: 2.5}
]


@Injectable()
export class ProductService {

  constructor() { }

  listProduct(): Product[]{
    return PRODUCTS;
  }

}
