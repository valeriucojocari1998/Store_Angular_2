import { Component, OnInit } from '@angular/core';
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
    this.productsService.getProducts().subscribe(data => {this.initialItems = data; this.items = this.initialItems})
  }
}
