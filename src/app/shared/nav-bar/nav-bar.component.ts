import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart-service.service';
import { NavbarService } from 'src/app/navbar.service';
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
  visible!: boolean;
  items2: any;
  ngOnInit() {
    this.items=this.cartService.getItems();
    this.visible = this.navbarService.visible;
  }

  add(val: Product){
    this.cartService.addItem(val)
    this.items=this.cartService.getItems();
  }
  remove(val: Product){
    this.cartService.removeItem(val)
    this.items=this.cartService.getItems();
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
