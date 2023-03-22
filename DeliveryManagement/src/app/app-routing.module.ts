import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPickupComponent } from './add-pickup/add-pickup.component';
import { AgencyAddRequestComponent } from './agency-add-request/agency-add-request.component';
import { AgencyListPickupComponent } from './agency-list-pickup/agency-list-pickup.component';
import { AgencyListRequestComponent } from './agency-list-request/agency-list-request.component';
import { DasboardAgencyComponent } from './dasboard-agency/dasboard-agency.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FreelancerListPickupComponent } from './freelancer-list-pickup/freelancer-list-pickup.component';
import { FreelancerListRequestComponent } from './freelancer-list-request/freelancer-list-request.component';
import { HeaderAgencyComponent } from './header-agency/header-agency.component';
import { HeaderComponent } from './header/header.component';
import { OrderListComponent } from './order-list/order-list.component';
import { PickupListWaitComponent } from './pickup-list-wait/pickup-list-wait.component';
import { PickupUpdateComponent } from './pickup-update/pickup-update.component';
import { SellerListRequestComponent } from './seller-list-request/seller-list-request.component';
import { StoreListComponent } from './store-list/store-list.component';

const routes: Routes = [
  {path:'Dashboard',component:DashboardComponent},
  {path:'Dashboard/store',component:StoreListComponent},
  {path:'Dashboard/sellerRQ',component:SellerListRequestComponent},
  {path:'Dashboard/store/order/:id',component:OrderListComponent},
  {path:'Dashboard/store/order/:id/Pickup/:idOrder',component:AddPickupComponent},
  {path:'pickupwt',component:PickupListWaitComponent},
  {path:'pickupwt/update/:idPickup',component:PickupUpdateComponent},
  {path:'headerAgency',component:HeaderAgencyComponent},
  {path:'dashboardAgency',component:DasboardAgencyComponent},
  {path:'dashboardAgency/pickupAgency',component:AgencyListPickupComponent},
  {path:'dashboardAgency/pickupAgency/:idPickup',component:AgencyAddRequestComponent},
  {path:'dashboardAgency/pickupFreelancer',component:FreelancerListPickupComponent},
  {path:'dashboardAgency/AgencyRequest',component:AgencyListRequestComponent},
  {path:'dashboardAgency/FreelancerRequest',component:FreelancerListRequestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
