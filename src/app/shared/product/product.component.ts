import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/assets/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {
    console.log(this.product)
  }

}
