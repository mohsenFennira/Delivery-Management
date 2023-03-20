import { Component } from '@angular/core';
import { Pickup } from '../Models/Pickup';
import { PickupService } from '../services/pickup.service';

@Component({
  selector: 'app-agency-list-pickup',
  templateUrl: './agency-list-pickup.component.html',
  styleUrls: ['./agency-list-pickup.component.css']
})
export class AgencyListPickupComponent {
  constructor(private pickupService:PickupService){}
   ngOnInit(){
    this.RetrievePickupBetweenAgencyAndstore();
   }

  pickup!:Pickup[];
  RetrievePickupBetweenAgencyAndstore(){
         this.pickupService.RetrievePickupBeTAgencyAndStore().subscribe(data=>{this.pickup=data})
  }

}
