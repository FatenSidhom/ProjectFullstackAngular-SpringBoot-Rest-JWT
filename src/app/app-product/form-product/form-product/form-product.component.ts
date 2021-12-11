import { Component, Input, Output, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Product } from '../../../core/model/product.model';
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
})
export class FormProductComponent implements OnInit {
  selectedFile = null;
  private product!: Product;
  productForm!: FormGroup;
  @Input() updateProduct!: Product;
  @Input() list!: Product[];
  @Output() addEvent = new EventEmitter<Product>();
  @Output() changeEvent = new EventEmitter<Product>();
  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    if (this.updateProduct === null) {
      this.product = new Product();
    } else {
      this.product = this.updateProduct;
    }

    this.productForm = this.builder.group({
      title: [
        this.product.libelle,
        [Validators.required, Validators.minLength(3)],
      ],
      price: [
        this.product.prixUnitaire,
        [Validators.required, Validators.min(10)],
      ],
      photo: ['', Validators.required],
      category: [this.product.categorie, Validators.required],
    });
  }
  upload(event: any) {
    this.selectedFile = event.target.files[0].name;
    console.log(this.selectedFile);
  }
  addProduct() {
      let i = this.list.indexOf(this.product);
      console.log(i);
      this.product.libelle = this.productForm.value.title;
      this.product.prixUnitaire = this.productForm.value.price;
      this.product.photo = String(this.selectedFile);
      this.product.categorie = this.productForm.value.category;
    if (i == -1) {
      //new product id
      this.product.id = String(Math.floor(Math.random() * (9001) + 1000));
      this.addEvent.emit(this.product);
    }
    else{
      this.changeEvent.emit(this.product);
    }




  }

}
