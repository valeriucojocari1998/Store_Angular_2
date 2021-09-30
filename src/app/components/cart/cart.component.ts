import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart-service/cart-service.service';
import { NavbarService } from 'src/app/service/nav-bar-service/navbar.service';
import { Product } from 'src/assets/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  constructor(
    private cartService: CartService,
    private navbarService: NavbarService
  ) { }

  items: Product[] = []
  totalPrice: number = 0;
  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.navbarService.hide();
    this.totalPrice = this.cartService.getPrice()
  }
  add(val: Product){
    this.cartService.addItem(val)
    this.items=this.cartService.getItems();
    this.totalPrice = this.cartService.getPrice()
  }
  remove(val: Product){
    this.cartService.removeItem(val)
    this.items=this.cartService.getItems();
    this.totalPrice = this.cartService.getPrice()
  }
  removeItem(val: Product){
    this.cartService.clearItem(val)
    this.items=this.cartService.getItems();
    this.totalPrice = this.cartService.getPrice()
  }
  clearCart(){
    this.cartService.clearItems();
    this.items=this.cartService.getItems();
    this.totalPrice = this.cartService.getPrice()
  }
  ngOnDestroy(){
    this.navbarService.show()
  }

}
