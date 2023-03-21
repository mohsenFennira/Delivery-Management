import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreListComponent } from './store-list/store-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { HeaderComponent } from './header/header.component';
import { AddPickupComponent } from './add-pickup/add-pickup.component';
import { FormsModule } from '@angular/forms';
import { PickupListWaitComponent } from './pickup-list-wait/pickup-list-wait.component';
import { PickupUpdateComponent } from './pickup-update/pickup-update.component';
import { HeaderAgencyComponent } from './header-agency/header-agency.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DasboardAgencyComponent } from './dasboard-agency/dasboard-agency.component';
import { AgencyListPickupComponent } from './agency-list-pickup/agency-list-pickup.component';
import { AgencyAddRequestComponent } from './agency-add-request/agency-add-request.component';
import { FreelancerListPickupComponent } from './freelancer-list-pickup/freelancer-list-pickup.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreListComponent,
    OrderListComponent,
    HeaderComponent,
    AddPickupComponent,
    PickupListWaitComponent,
    PickupUpdateComponent,
    HeaderAgencyComponent,
    DashboardComponent,
    DasboardAgencyComponent,
    AgencyListPickupComponent,
    AgencyAddRequestComponent,
    FreelancerListPickupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
