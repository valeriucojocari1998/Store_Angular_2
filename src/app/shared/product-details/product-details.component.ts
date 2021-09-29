import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart-service/cart-service.service';
import { NavbarService } from 'src/app/service/nav-bar-service/navbar.service';
import { ProductsService } from 'src/app/service/products-service/products.service';
import { Product } from 'src/assets/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private navbarService: NavbarService,
    private productService: ProductsService
  ) { }
  items : Product[] = [];

  ngOnInit() {
    this.navbarService.show()
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.getItem(productIdFromRoute);
  }
  addToCart(product: Product){
    if ( product.total > 0 ) {
      this.cartService.addItem(product);
    }
  }
  getItem(id: number){
    this.productService.getProduct(id).subscribe(data => {
      this.product = data
    })
  }

}
