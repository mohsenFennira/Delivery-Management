import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPickupComponent } from './add-pickup/add-pickup.component';
import { OrderListComponent } from './order-list/order-list.component';
import { StoreListComponent } from './store-list/store-list.component';

const routes: Routes = [
  {path:'store',component:StoreListComponent},
  {path:'store/order/:id',component:OrderListComponent},
  {path:'store/order/:id/addPickup/:idStore/:idOrder',component:AddPickupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
