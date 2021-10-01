import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/service/cart-service/cart-service.service';
import { ProductsService } from 'src/app/service/products-service/products.service';
import { Product } from 'src/assets/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productData!: Product;
  product!: BehaviorSubject<Product>;

  items: Product[] = [];
  workingitems: Product[] = [];
  constructor(
  private cartService: CartService,
  private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.product = new BehaviorSubject(this.productData)
    this.productService.getProducts().subscribe(data => {
      this.items = data;
      this.items.forEach(element => {
        if (this.product.value.productId === element.productId){
          this.workingitems.push(element)
        }
      });
      this.items = [];
    })
  }
  addToCart(val: Product){
    this.cartService.addItem(val);
  }
  changeDisplay(val: Product){
    this.product = new BehaviorSubject(val);
  }
}
