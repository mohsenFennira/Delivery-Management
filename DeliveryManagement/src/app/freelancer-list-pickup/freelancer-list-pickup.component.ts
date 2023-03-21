import { Component } from '@angular/core';
import { Pickup } from '../Models/Pickup';
import { PickupService } from '../services/pickup.service';

@Component({
  selector: 'app-freelancer-list-pickup',
  templateUrl: './freelancer-list-pickup.component.html',
  styleUrls: ['./freelancer-list-pickup.component.css']
})
export class FreelancerListPickupComponent {
  constructor(private pickupService:PickupService){}

  ngOnInit(){
    this.RetrievePickupFreelancer();
  }

  pickup!:Pickup[];
  RetrievePickupFreelancer(){
    this.pickupService.RetrievePickupsFreelancer().subscribe(data=>{this.pickup=data});
  }

}
