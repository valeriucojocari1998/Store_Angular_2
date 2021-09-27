import { Injectable } from '@angular/core';
import { Product } from 'src/assets/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor() { }

  getItems(){
    return this.items;
  }
  setItems(val: Product[]){
    this.items = val;
  }
  addItem(val: Product){
    let state = true;
    this.items.forEach(element => {
      if (val.id === element.id){
        element.amount++;
        state = false;
      }
    });
    if (state){
        this.items.push(val);
    }
  }
  removeItem(val: Product){
    this.items.forEach((element, index) => {
      if (element.id === val.id){
        if (element.amount === 1){
          this.items.splice(index, 1)
        }
        if (element.amount > 1){
          element.amount--;
        }
      }
    });
  }
}
