import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart-service.service';
import { Product } from 'src/assets/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;

  constructor(
  private cartService: CartService
  ) { }

  ngOnInit(): void {
  }
  addToCart(val: Product){
    this.cartService.addItem(val);
    console.log(this.product.amount)
  }
}
