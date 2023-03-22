import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestStatus } from '../Models/Enum/RequestStatus';
import { Pickup } from '../Models/Pickup';
import { Request } from '../Models/Request';
import { PickupService } from '../services/pickup.service';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-freelancer-list-pickup',
  templateUrl: './freelancer-list-pickup.component.html',
  styleUrls: ['./freelancer-list-pickup.component.css']
})
export class FreelancerListPickupComponent {
  constructor(private pickupService:PickupService,private requestService:RequestService,private r:Router){}

  ngOnInit(){
    this.RetrievePickupFreelancer();
  }
  request: Request={
    id:0,
    localDateTime: new Date('now'),
    requestStatus:RequestStatus.PENDING
  };
  pickup!:Pickup[];
  RetrievePickupFreelancer(){
    this.pickupService.RetrievePickupsFreelancer().subscribe(data=>{this.pickup=data});
  }
  AddRequestFreelancer(r:Request,idPickup:number){
    this.requestService.AssignRequestToFreelancer(this.request,idPickup).subscribe(res =>{console.log('Request created');this.r.navigateByUrl('/pickupwt');});
  }

}
