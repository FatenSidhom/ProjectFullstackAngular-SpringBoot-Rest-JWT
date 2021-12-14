import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCardContainerComponent } from './category/components/category-card-container/category-card-container.component';
import { ProductInPromotionComponent } from './Promotion/product-in-promotion/product-in-promotion.component';
import { PromotionComponent } from './Promotion/promotion/promotion.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'category', component: CategoryCardContainerComponent},
  { path: 'productInPromotion', component: ProductInPromotionComponent},
  { path: 'promotion', component: PromotionComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
