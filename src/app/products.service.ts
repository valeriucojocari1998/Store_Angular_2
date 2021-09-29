import { Injectable } from '@angular/core';
import { products, Product } from 'src/assets/products';
import { CartitemsService } from './cartitems.service';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  items: Product[] = [];
  constructor(
    private cartitemsService: CartitemsService
  ) { }

  /*getItems(){
    return this.items;
  }*/
  getItems(){
    this.items = [];
    this.cartitemsService.getProducts().subscribe(data =>{
      Object.values(data).forEach((element) => {
        this.items.push({id: parseInt(element["id"], 10), name: element["name"], description: element["description"], price: parseInt(element["price"], 10), image: element["image"], total: parseInt(element["total"], 10), amount: parseInt(element["amount"], 10)})
      });
    })
    return this.items
  }
}
