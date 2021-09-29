import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartitemsService {

  constructor(
    private http: HttpClient
  ) {   }
  private fetchData(){
    const x = this.http.get('assets/products.json')
    return x
  }
  getProducts(){
    return this.fetchData()
  }
}
