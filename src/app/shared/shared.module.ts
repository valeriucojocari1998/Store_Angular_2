import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { GenericFormComponent } from './components/generic-from/generic-from.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';


@NgModule({
  declarations: [
    NavBarComponent,
    ProductComponent,
    ProductDetailsComponent,
    GenericFormComponent,
    LoadingComponent,
    SearchComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    NavBarComponent,
    ProductComponent,
    GenericFormComponent,
    LoadingComponent,
    SearchComponent,
    FilterComponent
  ]
})
export class SharedModule { }
