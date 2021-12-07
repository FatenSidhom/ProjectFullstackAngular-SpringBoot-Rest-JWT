import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Category } from '../../category';

@Component({
  selector: 'categoryCard',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {
  @Input() title:string='';
  @Input() id:number=0;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    
  }
  deleteCategories(id:number) {
    this.api.deleteCategory(id).subscribe(()=>{
      console.log("deleted!");
      location.reload();
    })
  }

}
