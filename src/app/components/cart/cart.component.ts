import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart-service.service';
import { NavbarService } from 'src/app/navbar.service';
import { Product } from 'src/assets/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService,
  ) { }

  items: Product[] = []
  totalPrice: number = 0;
  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
  add(val: Product){
    this.cartService.addItem(val)
    this.items=this.cartService.getItems();
  }
  remove(val: Product){
    this.cartService.removeItem(val)
    this.items=this.cartService.getItems();
  }
  removeItem(val: Product){
    this.cartService.clearItem(val)
    this.items=this.cartService.getItems();

  }
  clearCart(){
    this.cartService.clearItems();
    this.items=this.cartService.getItems();
  }

}
