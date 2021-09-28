import { Injectable } from '@angular/core';
import { Product } from 'src/assets/products';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {



  items: Product[] = [];

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  getItems(){
    this.items = this.localStorageService.get(LocalStorageService.key)
    return this.items;
  }
  setItems(val: Product[]){
    this.items = val;
  }
  addItem(val: Product){
    let state = true;
    if (this.items!=null){
      this.items.forEach(element => {
        if (val.id === element.id){
          element.amount++;
          state = false;
        }
      });
    } else{
      this.items = [val];
      state = false;
    }
    if (state){
      this.items.push(val);
    }
    this.localStorageService.set(LocalStorageService.key, this.items);
    console.log(this.items)
  }
  removeItem(val: Product){
    this.items.forEach((element, index) => {
      if (element.id === val.id){
        if (element.amount > 1){
          element.amount--;
        } else{
          this.items.splice(index, 1)
        }
      }
    });
    this.localStorageService.set(LocalStorageService.key, this.items);
  }
  clearItems(){
    this.items = [];
    this.localStorageService.set(LocalStorageService.key, this.items);
  }
  clearItem(val: Product){
    this.items.forEach((element, index) => {
      if (element.id === val.id){
        console.log('found item')
        this.items.splice(index, 1)
        console.log(this.items)
      }
    });
    this.localStorageService.set(LocalStorageService.key, this.items);
  }
}
