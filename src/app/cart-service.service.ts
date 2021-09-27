import { Injectable, OnInit } from '@angular/core';
import { Product } from 'src/assets/products';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

  static key="CART-LIST";
  localStorage!: Storage;

  items: Product[] = [];

  constructor() {
    this.localStorage = window.localStorage;
  }
  ngOnInit(): void {
    if (this.isLocalStorageSupported){
      this.setItems(this.get(CartService.key));
    }
  }
  get(key: string):any{
    if (this.isLocalStorageSupported){
      return JSON.parse(<string>this.localStorage.getItem(key));
    }
    return {};
  }
  set(key: string, value: any):boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }
  remove(key: string): boolean{
    if (this.isLocalStorageSupported) {
      this.localStorage.removeItem(key);
      return true;
    }
    return false;
  }
  get isLocalStorageSupported(): boolean {
    return !!this.localStorage;
  }
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
    this.localStorage.set(CartService.key, this.items);
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
    this.localStorage.set(CartService.key, this.items);
  }
}
