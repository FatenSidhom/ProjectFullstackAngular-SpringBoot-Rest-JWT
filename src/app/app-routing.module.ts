import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCardContainerComponent } from './category/components/category-card-container/category-card-container.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'category', component: CategoryCardContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
