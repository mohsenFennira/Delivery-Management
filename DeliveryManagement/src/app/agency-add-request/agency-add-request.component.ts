import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgencyDeliveryMan } from '../Models/AgencyDeliveryMan';
import { RequestStatus } from '../Models/Enum/RequestStatus';
import { Request } from '../Models/Request';
import { AgencyService } from '../services/agency.service';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-agency-add-request',
  templateUrl: './agency-add-request.component.html',
  styleUrls: ['./agency-add-request.component.css']
})
export class AgencyAddRequestComponent {
  DeliveryManId!:number;
constructor(private requestService:RequestService ,private agencyService:AgencyService,private route:ActivatedRoute,private r:Router ){}


request: Request={
  id:5,
  localDateTime: new Date('now'),
  requestStatus:RequestStatus.PENDING
};

ngOnInit(){
  this.idPickup=this.route.snapshot.params['idPickup'];
  this.getDeliveryManByPickup(this.idPickup);
}


addForm(_t77:NgForm){
  const selectedDeliveryManId = this.DeliveryManId;
  this.request.requestStatus=RequestStatus.PENDING;
  this.requestService.AssignRequestDeliveryManToPickup(this.request,selectedDeliveryManId,this.idPickup).subscribe(res =>{console.log('Pickup created');this.r.navigateByUrl('/pickupwt');});
}
idPickup!:number;
deliveryMen!:AgencyDeliveryMan[];
getDeliveryManByPickup(idPickup:number){
  this.agencyService.retrieveDeliveryMenTOPickup(idPickup).subscribe(data=>{this.deliveryMen=data})
}
}
