import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../../api.service';
import { ProductCateg } from '../../models/productCateg';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit {
  filterName!:string;
  filteredData!:ProductCateg[];
  constructor(private route: ActivatedRoute, private api:ApiService) { }

  ngOnInit(): void {
    this.filterName = this.route.snapshot.params.name;
    this.api.getAllProducts().subscribe((data:ProductCateg[])=>{
      this.filteredData = data.filter(product=>product.category===this.filterName);
      console.log(this.filteredData);
    })
  }

}
