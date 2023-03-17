import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusPickupBuyer } from '../Models/Enum/StatusPickupBuyer';
import { StatusPickupSeller } from '../Models/Enum/StatusPickupSeller';
import { Pickup } from '../Models/Pickup';
import { PickupService } from '../services/pickup.service';

@Component({
  selector: 'app-add-pickup',
  templateUrl: './add-pickup.component.html',
  styleUrls: ['./add-pickup.component.css']
})
export class AddPickupComponent {

  constructor(private pickupService:PickupService,private http:HttpClient,private r:ActivatedRoute,private route:Router){}

  idOrder!:number;
  idStore!:number;

   pickup: Pickup = {
    id: 0,
    availableDeliver: "",
    orderOfTheSomeSeller: true,
    comment: "",
    governorate: "",
    city: "",
    codePickup: "",
    shippingStatus: "",
    payed: true,
    dateCreationPickup: new Date('now'),
    sum:0,
    nbRequest:0,
    deliveryTimeInHoursBuyer:"",
    deliveryTimeInHoursSeller:"",
    statusPickupSeller:StatusPickupSeller.PICKED,
    statusPickupBuyer:StatusPickupBuyer.PLACED
  };
  ngOnInit(){
    this.r.params.subscribe(params => {
      this.idOrder = params['idOrder'];
      this.idStore = params['idStore'];
    });
  }

 /* AddPickup(p:Pickup,idOrder:number,idStore:number){
       this.pickupService.addPickup(p,idOrder,idStore).subscribe();
  }*/

  addForm(_t7: NgForm) {
    this.pickup.governorate=_t7.controls['gov'].value;
    this.pickup.city=_t7.controls['city'].value;

    this.pickupService.addPickup(this.pickup,this.idOrder,this.idStore).subscribe(res =>{console.log('Pickup created');this.route.navigateByUrl('/store');})};
    }


