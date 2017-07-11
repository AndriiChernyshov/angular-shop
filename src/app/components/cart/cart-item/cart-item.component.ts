import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

import { CartItem } from './models/cart-item.model';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  providers: [ProductService],
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;
  @Output() notifyCarListRemoveProduct: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  private itemName: string;
  private itemPrice: number;
  
  constructor(private productService : ProductService) { }

  ngOnInit() {
    console.log('onInit: cart-item');
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log("ngOnChanges: car-item");
    
    var product = this.productService.findProductById(this.item.productId);
    if(product){
      this.itemName = product.name;
      this.itemPrice = product.price;
    }
  }

  private onBtnRemoveClick(item){
    this.notifyCarListRemoveProduct.emit(item);
  }

}
