import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListingsComponent } from './product/product-listings/product-listings.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  // {path: 'detail', component: ProductDetailComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
