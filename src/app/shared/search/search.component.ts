import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductsService } from 'src/app/service/products-service/products.service';
import { Product } from 'src/assets/products';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  items!: Observable<Product[]>
  private searchNames = new Subject<string>();
  constructor(
    private productService: ProductsService
  ) { }
  search(name: string){
    this.searchNames.next(name)
  }
  ngOnInit(): void {
    this.items = this.searchNames.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((name: string) => this.productService.getProductByName(name)),
    )
  }
  reload(){
  }
}

