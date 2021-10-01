import { Component, OnInit } from '@angular/core';
import { CartService, Total } from 'src/app/service/cart-service/cart-service.service';
import { NavbarService } from 'src/app/service/nav-bar-service/navbar.service';
import { Product } from 'src/assets/products';
import { animate, state, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    trigger('menuOptionsBackground', [
      state('DEFAULT', style({ backgroundColor: 'transparent' })),
      state('ACTIVE', style({ backgroundColor: '#93C5FE' })),
      transition('* => *', animate('0.3s ease-in-out')),
    ]),
  ],
})


export class NavBarComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private navbarService: NavbarService
  ) { }

  items: Product[] = [];
  total!: Total;
  visible!: boolean;
  update(){
    this.items = this.cartService.getItems();
    this.cartService.getTotal().subscribe(data => {this.total = data});
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
