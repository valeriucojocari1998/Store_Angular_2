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
    this.navbarService.hide();
    this.update();
  }
  add(val: Product){
    this.cartService.addItem(val)
    this.update();
  }
  remove(val: Product){
    this.cartService.removeItem(val)
    this.update();
  }
  removeItem(val: Product){
    this.cartService.clearItem(val)
    this.update();
  }
  clearCart(){
    this.cartService.clearItems();
    this.update();
  }
  ngOnDestroy(){
    this.navbarService.show()
  }
  update(){
    this.items=this.cartService.getItems();
    this.cartService.getTotal().subscribe(data => {this.total = data})
  }
}
