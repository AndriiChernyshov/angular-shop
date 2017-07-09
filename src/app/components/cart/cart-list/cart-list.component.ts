import { Component, OnInit, Input } from '@angular/core';

import { CartItem } from '../cart-item/models/cart-item.model';
import { CartList } from './models/cart-list.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  
  @Input() cartList: CartList;

  constructor() { }

  ngOnInit() {
  }

}
