import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppProductRoutingModule } from './app-product-routing.module';
import { FormProductComponent } from './form-product/form-product/form-product.component';
import { MainProductComponent } from './main-product/main-product/main-product.component';
import { ProductComponent } from './product/product/product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormProductComponent, MainProductComponent, ProductComponent],
  imports: [CommonModule, AppProductRoutingModule, ReactiveFormsModule],
})
export class AppProductModule {}
