import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from 'src/app/core/model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() deleteEvent = new EventEmitter<Product>();
  @Output() updateEvent = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  deleteNotif() {
    this.deleteEvent.emit(this.product);
  }
  updateNotif() {
    this.updateEvent.emit(this.product);
  }
}
