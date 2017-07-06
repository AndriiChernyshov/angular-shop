import { Component, OnInit, Input } from '@angular/core';

import { Product } from './models/product.model';

@Component({
  selector: 'product-detail',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  constructor() { }


  ngOnInit() {
  }

}
