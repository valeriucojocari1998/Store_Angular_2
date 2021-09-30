import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService, Total } from 'src/app/service/cart-service/cart-service.service';
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
  total!: Total;
  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.navbarService.hide();
    this.total = this.cartService.getTotal()
  }
  add(val: Product){
    this.cartService.addItem(val)
    this.items=this.cartService.getItems();
    this.total = this.cartService.getTotal()
  }
  remove(val: Product){
    this.cartService.removeItem(val)
    this.items=this.cartService.getItems();
    this.total = this.cartService.getTotal()
  }
  removeItem(val: Product){
    this.cartService.clearItem(val)
    this.items=this.cartService.getItems();
    this.total = this.cartService.getTotal()
  }
  clearCart(){
    this.cartService.clearItems();
    this.items=this.cartService.getItems();
    this.total = this.cartService.getTotal()
  }
  ngOnDestroy(){
    this.navbarService.show()
  }

}
