import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { NavbarService } from 'src/app/service/nav-bar-service/navbar.service';
import { ProductsService } from 'src/app/service/products-service/products.service';
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
  initialItems: Product[] = []
  nonChangingItems: Product[] = []

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getItems();
  }

  onScrollDown(){
    this.initialItems.forEach(element => {
      this.items.push(element);
    });
  }

  getItems(){
    this.productsService.getProducts().subscribe(data => {this.initialItems = data; this.items = this.initialItems; this.nonChangingItems = this.initialItems})
  }

  filterItemsByUnderPrice(underPrice: number){
    this.initialItems = [];
    this.items = [];
    this.nonChangingItems.forEach(element => {
      if (element.price < underPrice) {this.initialItems.push(element); this.items.push(element)}
    });
    console.log(this.initialItems)
  }
  filterItemsByOverPrice(overPrice: number){
    this.initialItems = [];
    this.items = [];
    this.nonChangingItems.forEach(element => {
      if (element.price > overPrice) {this.initialItems.push(element); this.items.push(element)}
    });
    console.log(this.initialItems)
  }
}
