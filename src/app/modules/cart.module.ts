import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../components/cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from '../components/checkout/checkout.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class CartModule { }
