import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductsService } from 'src/app/service/products-service/products.service';
import { Product } from 'src/assets/products';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  items?: Observable<Product[]>;
  private searchNames = new Subject<string>();
  constructor(
    private productService: ProductsService,
    private router: Router
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
  reload(val: Product){
    const string = '/products/' + val.id.toString()
    window.location.replace(string)
  }
}

