import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart-service/cart-service.service';
import { Product } from 'src/assets/products';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  items: Product[] = [];
  totalPrice: number = 0;
  totalAmount: number = 0;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.totalPrice = this.cartService.getPrice();
    this.totalAmount = this.cartService.getAmount();
  }

}
