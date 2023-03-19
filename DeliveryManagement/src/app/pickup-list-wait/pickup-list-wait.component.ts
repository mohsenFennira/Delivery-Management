import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pickup } from '../Models/Pickup';
import { PickupService } from '../services/pickup.service';

@Component({
  selector: 'app-pickup-list-wait',
  templateUrl: './pickup-list-wait.component.html',
  styleUrls: ['./pickup-list-wait.component.css']
})
export class PickupListWaitComponent {
  constructor(private pickupService:PickupService,private http:HttpClient,private route:Router){}
  ngOnInit(){
    this.GetPickuSellerWait();
  }
  pickup!:Pickup[];
  GetPickuSellerWait(){
    this.pickupService.GetPickupBySellerWaiting().subscribe(data=>{this.pickup=data});
  }
  DeletePickup(idPickup: number) {
    // Call the pickup service to delete the pickup
    this.pickupService.DeletePickup(idPickup)
      .subscribe(() => {
        // Call the method to refresh the table data
        this.GetPickuSellerWait();
        // Show a notification to indicate the pickup was deleted successfully
      }
      
      );
  }
}
