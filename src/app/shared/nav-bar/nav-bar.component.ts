import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart-service.service';
import { Product } from 'src/assets/products';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }
  totalPrice: number = 0;
  items: Product[] = []
  ngOnInit(): void {
    this.items=this.cartService.getItems();

    console.log(this.items.length)
  }

  add(val: Product){

  }
  remove(val: Product){

  }
}
