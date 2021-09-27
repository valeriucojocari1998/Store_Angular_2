import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart-service.service';
import { ProductsService } from 'src/app/products.service';
import { Product } from 'src/assets/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  items: Product[] = [];
  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.items = this.productsService.getItems();
    console.log(this.items)
  }
  addToCart(val: Product){
    this.cartService.addItem(val);
  }
}
