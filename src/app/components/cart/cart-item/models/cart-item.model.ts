import {Product} from '../../../product/models/product.model';

export class CartItem {

    constructor(public productId: Number, public qty: number, public packAsGift: boolean){
        this.productId = productId;
        this.qty = qty;
        this.packAsGift = packAsGift;
    }

}
