import { Component, OnInit } from '@angular/core';
import { CartService, Total } from 'src/app/service/cart-service/cart-service.service';
import { Product } from 'src/assets/products';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  items: Product[] = [];
  total!: Total;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.cartService.getTotal().subscribe(data => {this.total = data});
  }

}
