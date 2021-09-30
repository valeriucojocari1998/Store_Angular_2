import { Injectable } from '@angular/core';
import { Product } from 'src/assets/products';
import { LocalStorageService } from '../local-storage-service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {



  items: Product[] = [];

  constructor(
    private localStorageService: LocalStorageService,
  ) { }


  getItems(){
    let local = this.localStorageService.get(LocalStorageService.key)
    if (local) {this.items = local; return this.items;}
    console.log(this.items);
    return this.items
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
    }else{
      console.log(this.items)
      this.items = [val]
      console.log(this.items)
      state = false;
    }
    if (state){
      this.items.push(val);
    }
    this.localStorageService.set(LocalStorageService.key, this.items);
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
  getPrice(){
    if (this.items){
      return this.items.reduce(function (acc, obj: Product) {return acc + obj.amount*obj.price}, 0)
    }
    return 0;
  }
  getAmount(){
    if (this.items){
      return this.items.reduce(function (acc, obj: Product) {return acc + obj.amount}, 0)
    }
    return 0;
  }
}
