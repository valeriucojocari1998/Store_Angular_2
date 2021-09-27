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
  scrollDistance = 1;
  scrollUpDistance = 2;
  throttle = 150;

  constructor(
    private productsService: ProductsService,
  ) { }

  initialItems = this.productsService.getItems();
  ngOnInit(): void {
    this.initialItems.push.apply(this.initialItems, this.initialItems);
    this.initialItems.push.apply(this.initialItems, this.initialItems);
    this.items = this.initialItems
  }
  onScrollDown(){
    this.initialItems.forEach(element => {
      this.items.push(element);
    });
  }
}
