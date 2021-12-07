import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { AddCategoryCardComponent } from './components/add-category-card/add-category-card.component';
import { CategoryCardContainerComponent } from './components/category-card-container/category-card-container.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CategoryCardComponent,
    AddCategoryCardComponent,
    CategoryCardContainerComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  exports : [
    CategoryCardContainerComponent
  ]

})
export class CategoryModule { }
