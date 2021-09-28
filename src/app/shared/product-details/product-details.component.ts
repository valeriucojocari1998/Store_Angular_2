import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart-service.service';
import { NavbarService } from 'src/app/navbar.service';
import { Product, products } from 'src/assets/products';

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
    private navbarService: NavbarService
  ) { }

  ngOnInit(): void {
    this.navbarService.show()
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    //find our product
    this.product = products.find(product => product.id === productIdFromRoute)
  }
  addToCart(product: Product){
    if ( product.total > 0 ) {
      this.cartService.addItem(product);
    }
  }

}
