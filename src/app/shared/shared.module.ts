import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { GenericFormComponent } from './generic-from/generic-from.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavBarComponent,
    ProductComponent,
    ProductDetailsComponent,
    GenericFormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    NavBarComponent,
    ProductComponent,
    GenericFormComponent
  ]
})
export class SharedModule { }
