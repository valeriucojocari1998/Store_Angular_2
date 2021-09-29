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
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

}
