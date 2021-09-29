import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/assets/products';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(
    private http: HttpClient
  ) {   }

  private productsUrl = 'api/products';

  getProducts() :Observable<Product[]>{
    return this.http.get<Product[]>(this.productsUrl);
  }
  getProductById(id: number): Observable<Product>{
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url);
  }
  getProductByName(name: string): Observable<Product[]>{
    const url = `${this.productsUrl}/?name=${name}`
    return this.http.get<Product[]>(url);
  }
}
