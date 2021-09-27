import { Injectable } from '@angular/core';
import { products, Product } from 'src/assets/products';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  items = products;
  constructor() { }

  getItems(){
    return this.items;
  }
}
