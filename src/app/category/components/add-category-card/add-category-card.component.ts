import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { CategoryModel } from '../../category.model';
import { ApiService } from '../../api.service';
@Component({
  selector: 'addCategoryCard',
  templateUrl: './add-category-card.component.html',
  styleUrls: ['./add-category-card.component.css']
})
export class AddCategoryCardComponent implements OnInit {
  formValue !: FormGroup;
  categoryModel : CategoryModel = new CategoryModel();
  constructor(private formBuilder: FormBuilder,
              private api : ApiService) { }

  ngOnInit(): void {
    this.formValue= this.formBuilder.group({
      name: ['']
    })
  }
  postCategoryDetails() {
    this.categoryModel.name = this.formValue.value.name;
    this.api.createCategory(this.categoryModel)
    .subscribe(res=>{
      console.log(res);
    },
    err=>{
      console.log("something is wrong")
    });
    location.reload();
  }
}
