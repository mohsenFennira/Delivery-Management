import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { StoreListComponent } from './store-list/store-list.component';

const routes: Routes = [
  {path:'store',component:StoreListComponent},
  {path:'store/order/:id',component:OrderListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
