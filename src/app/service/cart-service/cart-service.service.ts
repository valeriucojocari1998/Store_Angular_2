import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/assets/products';
import { LocalStorageService } from '../local-storage-service/local-storage.service';

export interface Total{
  price: number,
  items: number
}
@Injectable({
  providedIn: 'root'
})
export class CartService {



  items: Product[] = [];
  total: BehaviorSubject<Total> = new BehaviorSubject({price: 0, items: 0});

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
    this.localStorageService.set(LocalStorageService.key, this.items);
  }

  addItem(val: Product){
    let state = true;
    if (this.items!=null){
      this.items.forEach(element => {
        if (val.id === element.id){
          if(element.amount< element.total){
            element.amount++;
          }
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
    this.setTotal()
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
    this.setTotal()
    this.localStorageService.set(LocalStorageService.key, this.items);
  }
  clearItems(){
    this.items = [];
    this.setTotal()
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
    this.setTotal()
    this.localStorageService.set(LocalStorageService.key, this.items);
  }
  setTotal(){
    this.total.value.price = this.items.reduce(function (acc, obj: Product) {return acc + obj.amount*obj.price}, 0)
    this.total.value.items = this.items.reduce(function (acc, obj: Product) {return acc + obj.amount}, 0)
  }
  getTotal(){
    this.setTotal()
    return this.total;
  }
}
