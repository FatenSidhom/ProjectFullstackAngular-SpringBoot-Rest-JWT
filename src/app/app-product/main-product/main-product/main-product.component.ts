import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/Product/product.service';
import { Product } from 'src/app/core/model/product.model';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css'],
})
export class MainProductComponent implements OnInit {
  inputProduct: Product = new Product();
  isForm: Boolean = false;
  buttonString: String = 'Add New Product';
  listProduct: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getListProduct()
      .subscribe((data: Product[]) => (this.listProduct = data));
  }
  changePage() {
    this.isForm = !this.isForm;
    if (this.isForm) {
      this.buttonString = 'Go Back To List';
    } else {
      this.inputProduct = new Product();
      this.buttonString = 'Add New Product';
    }
  }
  deleteProduct(p: Product) {
    let i = this.listProduct.indexOf(p);
    this.productService
      .deleteProduct(p.id)
      .subscribe(() => this.listProduct.splice(i, 1));
  }
  saveProduct(product: Product) {
    let i = this.listProduct.indexOf(product);

    if (i != -1) {
      //update a product
      this.productService.updateProduct(product).subscribe(
        () => (this.listProduct[i] = product),
        () => console.log('error')
      );
    } else {
      //add a new product
      this.productService.addProduct(product).subscribe(
        () => this.listProduct.push(product),
        () => console.log('error')
      );
    }
    this.isForm = false;
    this.buttonString = 'Add New Product';
    this.inputProduct = new Product();
  }

  updateProduct(p: Product) {
    this.isForm = true;
    this.buttonString = 'Go Back To List';
    this.inputProduct = p;
  }
}
