import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';
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
  initialItems: Product[] = []

  constructor(
    private productsService: ProductsService,
    private navbarService: NavbarService
  ) { }

  ngOnInit(): void {
    this.navbarService.show();
    this.initialItems = this.productsService.getItems();
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
