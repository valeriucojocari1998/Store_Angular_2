import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart-service/cart-service.service';
import { NavbarService } from 'src/app/service/nav-bar-service/navbar.service';
import { Product } from 'src/assets/products';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private navbarService: NavbarService
  ) { }
  totalPrice: number = 0;
  items: Product[] = [];
  totalItems: number = 0;
  visible!: boolean;
  update(){
    this.items = this.cartService.getItems();
    this.totalPrice = this.cartService.getPrice();
    this.totalItems = this.cartService.getAmount();
  }
  ngOnInit() {
    this.update()
    this.visible = this.navbarService.visible;
  }

  add(val: Product){
    this.cartService.addItem(val)
    this.update()
  }
  remove(val: Product){
    this.cartService.removeItem(val)
    this.update()
  }
  hide(){
    this.navbarService.hide()
    this.visible = false;
  }
  show(){
    this.navbarService.show()
    this.visible = true;
  }
}
